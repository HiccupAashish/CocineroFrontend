import { CreateChef } from '../../actions/chefAction'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import "../../styles/ChefSignup.scss"
import chefsignup from "../../images/chefsignup.jpg"
export default function Chef() {
  
    const emailRef=useRef()
    const dispatch=useDispatch()
    // const[images,setImages]=useState()
    const[name,setName]=useState()
    const [email,setEmail]=useState()
    
    const [password,setPassword]=useState()

    // function fileSelector(e){
    //     console.log(e.target.files[0])
    //     setImages(e.target.files[0])
    // }

    function handlename(e){
        e.preventDefault()
        setName(e.target.value)
    }
    function handleEmailChange(e){
        e.preventDefault()
        setEmail(e.target.value)
    }
    function handlePasswordChange(e){
        e.preventDefault()
        setPassword(e.target.value)
    }
  

    function handleUpload(){
     
        dispatch(CreateChef({name,email,password}))
    }
  return (
    <div className='chef_signup'>
        <img src={chefsignup} alt="no Img"/>
        <form onSubmit={handleUpload}>
            <label>Name:</label>
            <input onChange={handlename} type="text"/>
            <label>Email:</label>
            <input type="email" onChange={handleEmailChange}/>
            <label>Password:</label>
            <input type="password" onChange={handlePasswordChange}/>
            <button type='submit' >Signup</button>
        </form>
    </div>
  )
}
