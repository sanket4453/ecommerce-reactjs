import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../assets/EcommerceLogo.jpg'
import {auth} from '../firebase/firebase'
import '../styles/Login.css'

function Login() {
    const history = useHistory();
    const [useremail, setUserEmail] =useState('')
    const [userpassword, setUserPassword] =useState('')

    const loginUser =(e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(useremail,userpassword)
        .then((auth) =>{
            history.push('/')
        })
        .catch(e => alert(e.message))
        
    }

    const userSignUp =(e) =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then(auth =>{
            history.push('/');
        })
        .catch(e => alert(e.message))
    }

    return (
        <div className="login">
            <Link>
             <img className="login_container"
                src={logo}
                alt="logo"
             />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"
                      value={useremail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type="password"
                     value={userpassword}
                     onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <button onClick={loginUser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <button onClick={userSignUp} className="login__registerButton">Create Your Account</button>
            </div>
        </div>
    )
}

export default Login
