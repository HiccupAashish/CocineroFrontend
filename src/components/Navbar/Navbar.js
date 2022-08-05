import React from 'react'
import {HiOutlineMenu} from "react-icons/hi"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="container-fluid">
         <button className="btn btn-primary" style={{background:"transparent",border:"none"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
           <HiOutlineMenu/> 
         </button>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header" style={{backgroundColor:"#343a40"}} >
                <h3 style={{color:"red", textAlign:"center"}} className="offcanvas-title" id="offcanvasExampleLabel">Welcome</h3>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body" style={{backgroundColor:"#343a40"}}>
               <Link to="/chef/login"><div >Login as Chef </div></Link> 
               <Link to="/chef/signup"> <div className="content-list"> Signup for Chef</div> </Link>
               {localStorage.chef && <Link to="/chef/edit" >Modify your data</Link>}
            </div>
        </div>  
    </div>
  )
}
