import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Stateprovider/Stateprovider';
import { AccordionSummary } from '@material-ui/core';
import { getBasketTotal } from '../Reducer/reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {
    const history = useHistory()
    const [{ basket }, dispatch] = useStateValue();

    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket?.length} iteams): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order conatain a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix='&#8377;'
        />
        <button onClick={(e) => history.push("/payment")}>
          Proceed to Checkout
        </button>
      </div>
    );
}

export default Subtotal
