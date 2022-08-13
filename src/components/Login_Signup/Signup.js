import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../actions/userAction'
import signup_pic from "../../images/walle.jpg"
import "../../styles/Signup.scss"

export default function Signup() {
   
   const dispatch=useDispatch()
   const [username,setUserName]=useState()
   const [email,setEmail]=useState()
   const [password,setPassword]=useState()
  

    function handleUsernameChange(e){
        setUserName(e.target.value)
    }

    function handleEmailChange(e){
        setEmail(e.target.value)
    }
    function handlePasswordChange(e){
            setPassword(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()

        console.log(userInfo)
        dispatch(createUser(userInfo))
        setUserName('')
        setEmail('')
        setPassword('')
        
    }
    
    const userInfo= {username,password,email}
     
    function handleCallbackResponse(response){
        console.log("Encoded JWT ID token: "+response.credential)
    }

    useEffect(()=>{
      google.accounts.id.initialize({
        client_id: "948410654431-c9krko7caifm9u6a84ea4i9dpp2nl05u.apps.googleusercontent.com",
        callback: handleCallbackResponse
      })
      google.accounts.id.renderButton(
        document.getElementById("signingoogle"),
        {theme: 'outline',size: 'large'}
      )
    },[])


  return (
    <div className='signup'>
        <img src={signup_pic} alt="signup_pic"/>
        <div className='signup_form'>
        <form onSubmit={handleSubmit}>
            <h3> Signup</h3>

            <label> Name:</label>
            <input 
            onChange={handleUsernameChange}
            type="text"
            name="username"
            placeholder="Username"
            required
            />
            <label>Email:</label>
            <input   
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Email"
            required 
            />
            <label>Password:</label>
            <input 
            onChange={handlePasswordChange}
            type="password"
            name="password"
            placeholder="Password"
            required
            />

           
            <button className='btn btn-danger' type="submit">
            Create Account
            </button>
        </form>
       <div className="signingoogle">

       </div>
        </div>

    </div>
  )
}
