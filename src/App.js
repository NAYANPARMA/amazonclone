import React,{useEffect} from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Checkout from './Checkout/Checkout';
import Login from './Authentication/Login';
import { auth } from './firebase';
import { useStateValue } from './Stateprovider/Stateprovider';
import Payment from './Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders/Orders';


const promise = loadStripe(
  "pk_test_51HX044DNKvcY3zsCxta23OL0BAZ9kq7t8Se2QGHKaAwywqS5ny8OuXw70QzgqRyV1HbJztJZSNcNCoe2TT3RRy5Q00T5BoFx2Q"
);



function App() {
  const [{},dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged( authUser => {
      console.log('USER is >>>', authUser)

      if(authUser){
          dispatch({
            type:'SET_USER',
            user:authUser
          })
      } else {
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })
  },[])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
            <Header/>
            <Orders/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
