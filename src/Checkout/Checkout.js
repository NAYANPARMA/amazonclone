import React from 'react'
import { useStateValue } from '../Stateprovider/Stateprovider';
import './Checkout.css'
import Checkoutproduct from './Checkoutproduct';
import Subtotal from './Subtotal';
import FlipMove from "react-flip-move";


function Checkout() {
  const itemNotVisible = {
    transform: "translateX(-100%)",
    opacity: 0.2,
  };

  const [{basket,user} , dispatch] = useStateValue();
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            <FlipMove
              leaveAnimation={{
                from: {},
                to: itemNotVisible,
              }}
            >
              {basket?.map((item,index) => (
               <div key={index}> 
                  <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                  />
                </div>
              ))}
            </FlipMove>
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    );
}

export default Checkout
