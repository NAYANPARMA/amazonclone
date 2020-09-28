import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'


function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText = {() => (
                    <div>
                        <p>
                            Subtotal (0 iteams): <strong>0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/> This order conatain a gift
                        </small>
                    </div>
                )} 
                decimalScale={2}
                value ={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} 
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
