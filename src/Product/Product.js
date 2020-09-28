import React from 'react'
import './Product.css'

function Product(props) {
    return (
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="product__rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
        </div>

        <img src={props.image} />
        <button>Add to basket</button>
      </div>
    );
}

export default Product
