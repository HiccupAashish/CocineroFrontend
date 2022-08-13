import React, { useContext, useEffect, useState } from 'react'
import "../../styles/Navbar.scss"
import logo from "../../images/logo.png"
import Button from 'react-bootstrap/Button';
import {HiOutlineMenu} from "react-icons/hi"
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logged, logout } from '../store/userSlice';
import { CocineroContext } from '../Context/Context';


export default function Navbar() {

  const  currentUser  = useSelector((store) => store.user.currentUser);
  const curretChef=useSelector((state)=>state.chef.cheDetails)
  const location=useLocation()
  console.log(location.pathname)
  const {navtoggle}=useContext(CocineroContext)
  const [scroll,setScroll]=useState(false)
  const dispatch=useDispatch()
  const islogged=useSelector((state)=>state.user.islogged)

  const changeColor=()=>{
    if(window.scrollY>=50){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  window.addEventListener('scroll',changeColor)

  useEffect(()=>{
  const  header=document.querySelector(".header")
    if (scroll){
      header.classList.add('header-bg')
    }else{
      header.classList.remove("header-bg")
    }
  })

  function handleLogout(){
    dispatch(logout())
    localStorage.clear()
    dispatch(logged(false))
  }

  return (
    <div className={location.pathname!="/"? ' header header-rel':' header header-fix'  }>
        
         <button className="btn btn-primary" style={{background:"transparent",border:"none",color:"black"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
           <HiOutlineMenu/> 
         </button>

         <Link to="/">
          <span>
         <img src={logo} style={{height:"60px",width:"60px"}}/>
          <p>Cocinero</p>
          </span>
          </Link>
         
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header" style={{backgroundColor:"#343a40"}} >
                <h3 style={{color:"red", textAlign:"center"}} className="offcanvas-title" id="offcanvasExampleLabel">Welcome</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" style={{backgroundColor:"#343a40"}}>
               <Link to="/chef/login"><div >Login as Chef </div></Link> 
               <Link to="/chef/signup"> <div className="content-list"> Signup for Chef</div> </Link>   
            </div> 
        </div>  
        <nav className='login_signup_link'>
           {islogged?
                  <Link to="/"> <button className='after-logged-btn' onClick={handleLogout}>Logout</button></Link> :
                  <>
                    <Link to="/user/login"> <button className='nav_button'>Login</button></Link>
                    <Link to="/user/signup"> <button className='nav_button'>Signup</button></Link>
                  </>
                  }
               {currentUser &&  <Link to ="/user/admin"><button className='after-logged-btn'>Dashboard</button></Link>}  
               {curretChef &&  <Link to ="/chef/admin"><button className='after-logged-btn'>Dashboard</button></Link>}
        </nav>
    </div>
  )
}
