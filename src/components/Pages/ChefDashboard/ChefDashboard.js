import React, { useContext, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import ChefNavbar from './ChefNavbar'
import "../../../styles/ChefDashboard.scss"
import RequestedBooking from './RequestedBooking'
import AcceptedBookings from './AcceptedBookings'
import { CocineroContext } from '../../Context/Context'
import ChefProfile from './ChefProfile'
import ChefSetting from './ChefSetting'
export default function ChefPage() {
    const currentChef=useSelector((state)=>state.chef.chefDetails)
    const navigate=useNavigate()
    const {chefPage}=useContext(CocineroContext)
    useEffect(()=>{
      console.log(currentChef)
      if(!currentChef){
        
        navigate("/chef/login")
      }
    },[])
  return (
    <div className='chef-dashboard' >
        {currentChef && 
        <>
        <div className='chef-navbar' >
           <ChefNavbar/>
        </div>
         <div className='chef-class-box'>
            {chefPage=="callrequestedbooking"&& <RequestedBooking/>}
            {chefPage=="callacceptedbooking" &&<AcceptedBookings/>}
            {chefPage=="callprofile" &&<ChefProfile/>}
            {chefPage=="callsetting" &&<ChefSetting/>}
            {/* {chefPage=="callprofile" && <ChefProfile/>} */}
         </div>
         </>}
    </div>
  )
}
