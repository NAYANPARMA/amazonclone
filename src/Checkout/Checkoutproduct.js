import React from 'react'
import { useStateValue } from '../Stateprovider/Stateprovider';
import './Checkoutproduct.css'

function Checkoutproduct(props) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () =>{
        //remove item frothe basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: props.id
        })
    }
    console.log(props)

    return (
      <div className="checkoutproduct">
        <img className="checkoutproduct__image " src={props.image} />
        <div className="checkoutproduct__info">
          <p className="checkoutproduct__title">{props.title}</p>
          <p className="checkoutproduct__price">
            <small>&#8377;</small>
            <strong>{props.price}</strong>
          </p>
          <div className="checkoutproduct__rating">
            {Array(props.rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          { !props.hidebutton && (
            <button onClick={removeFromBasket}>Remove from basket</button>
          )}
        </div>
      </div>
    );
}

export default Checkoutproduct
