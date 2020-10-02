import React from 'react'
import { useStateValue } from '../Stateprovider/Stateprovider';
import './Product.css'

function Product(props) {

  const [ state , dispatch] = useStateValue()
  console.log(props.price.toFixed());
  const addtoBasket = () =>{
    // dispatch action 
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating:props.rating
      }
    })
  }

    return (
      <div className="product">
        <div className="product__info">
          <p>{props.title}</p>
          <p className="product__price">
            <small> &#8377; </small>
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
        <button onClick={addtoBasket} style={{ cursor: "pointer" }}>
          Add to basket
        </button>
      </div>
    );
}

export default Product
