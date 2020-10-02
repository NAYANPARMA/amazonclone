import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';
import Checkoutproduct from '../Checkout/Checkoutproduct';
import { getBasketTotal } from '../Reducer/reducer';
import { useStateValue } from '../Stateprovider/Stateprovider';
import './Payment.css'
import axios from '../axios';
import { db } from '../firebase';


function Payment() {

    const [{basket,user}, dispatch] = useStateValue();
    const history = useHistory()
    const [error , setError] = useState(null)
    const [disabled, setDisabled]  = useState(true)
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
      //genertare the special secret which aloows usto charge a

      const getClientSecret = async () => {
          const response = await axios({
            method: "post",
            //Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${(getBasketTotal(basket) * 100).toFixed()}`,
          });
          setClientSecret(response.data.clientSecret)
      }

      getClientSecret();
    }, [basket])
    console.log('The secret is', clientSecret);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) => {
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          })
          .then(({paymentIntent}) => {
           // payment intent = payment confirmation
            db.collection("users")
              .doc(user?.uid)
              .collection("orders")
              .doc(paymentIntent.id)
              .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
              });

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
              type: "EMPTY_BASKET",
            });

            history.replace("/orders");
          });
    }

    const handleChange = (event) => {
        // event.preventDefault()
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    return (
      <div className="payment">
        <div className="payment__container">
          <h1>Checkout {<Link to="/checkout">{basket?.length} items</Link>}</h1>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>18/502, Vikasnagar , Jantanagar</p>
              <p>Ahmedanad, Gujarat</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <Checkoutproduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              {/* Stripe magic will go here */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment__pricecontainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix="&#8377;"
                  />
                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {/* error */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment
