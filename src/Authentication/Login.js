import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import './Login.css'

function Login() {

    const history = useHistory()
    const [email ,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (event) => {
        event.preventDefault()
        auth.
            signInWithEmailAndPassword(email,password)
            .then( auth => {
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const ragister = (event) => {
        event.preventDefault()
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch( error => alert(error.message))

    }

    return (
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="/1280px-Amazon_logo.svg.webp"
            alt="login__logo"
          />
        </Link>
        <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input type="text"
                // placeholder='Enter your email' 
                value={email} 
                onChange={(event) => setEmail(event.target.value)}
            />
            <h5>Password</h5>
            <input type="password" 
                // placeholder='Enter your password' 
                value={password} 
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type='submit' onClick={signIn} className="login__signinbutton">Sign In</button>
          </form>
          <p>
            By signing-in you agree to AMAZON CLONE's Conditions of Use & sale,
            Please see our Privacy Notice, our Cookies Notice and our Interest
            Based Ads Notice.
          </p>
          <button onClick={ragister} className="login__ragisterbutton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    );
}

export default Login
