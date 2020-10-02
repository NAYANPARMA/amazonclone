import React from 'react'
import moment from 'moment'
import './Order.css'
import Checkoutproduct from '../Checkout/Checkoutproduct'
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
    return (
      <div className="order">
        <h2>Order</h2>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order__id">
          <small>{order.id}</small>
        </p>
        {order.data.basket?.map((item) => (
          <Checkoutproduct
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
            hidebutton
          />
        ))}
        <CurrencyFormat
          renderText={(value) => <h3>Order Total: {value}</h3>}
          decimalScale={2}
          value={order.data.amount/100}
          displayType={"text"}
          thousandSeparator={true}
          prefix="&#8377;"
        />
      </div>
    );
}

export default Order
