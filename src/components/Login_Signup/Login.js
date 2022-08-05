import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {SiFacebook} from "react-icons/si"
import {FcGoogle}from "react-icons/fc"
import { useLocation, useNavigate } from 'react-router-dom'
import { logInUser } from '../../actions/userAction'
import   '../../styles/Login.scss'
import loginimage from "../../images/picture2.jpg"



export default function Login() {
    const user=useSelector((state)=>state.auth.user)
    const location=useLocation()
    const dispatch=useDispatch()
    const [email, setEmail]=useState()
    const [password,setPassword]=useState()

    const userInfo={email,password}
    console.log(location)
    function handleEmailChange(e){
        e.preventDefault()
        setEmail(e.target.value)
    }
    function handlePasswordChange(e){
        e.preventDefault()
        setPassword(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        dispatch(logInUser(userInfo))
        e.target.reset();
        setEmail(' ')
        setPassword(" ")
    }
    
    function handleClear(e){
        e.preventDefault()
        localStorage.clear()
    }

  return (
    <div className='login'>
        <div className="login_box">
        <img src={loginimage}/>
        <form onSubmit={handleSubmit}>
        <h2> Login </h2>
            <label> Email:</label>
            <input  onChange={handleEmailChange} type="email" name="email"  />
            <label> Password:</label>
            <input onChange={handlePasswordChange} type="password" name="password"/>
            <p>Forgot Password</p>
            <button type="submit">
              Login
            </button>
            <button onClick={handleClear}>clear</button>
        </form>
    {user && "hello"}
        </div>
        <h3> Or Login Using </h3>
        <div className='extra_info'>
            <SiFacebook/>
            <FcGoogle/>  
        </div>
    </div>
  )
}