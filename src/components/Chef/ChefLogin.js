import React, { useState } from 'react'
import "../../styles/ChefLogin.scss"
import Chef_pic from "../../images/cheflogin.jpg"
import { useDispatch } from 'react-redux'
import { logInChef } from '../../actions/chefAction'

export default function ChefLogin() {
    const [email, setEmail]=useState()
    const [password,setPassword]=useState()
    const dispatch=useDispatch()

    function handleEmailChange(e){
        e.preventDefault()
        setEmail(e.target.value)
    }
    function handlePasswordChange(e){
        e.preventDefault()
        setPassword(e.target.value)
    }
    function handlesubmit(e){
        e.preventDefault()
        dispatch(logInChef({email,password}))
        
    }
  return (
    <div className='Chef_login'>
        <img src={Chef_pic}/>
        <form onSubmit={handlesubmit}>
            <h3> Login Chef</h3>
            <label> Email:</label>
            <input  onChange={handleEmailChange} type="email" name="email"  />
            <label> Password:</label>
            <input onChange={handlePasswordChange} type="password" name="password"/>
            <p>Forgot Password</p>
            <button type="submit">
                Login
            </button>
        </form>
    </div>
  )
}