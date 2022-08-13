import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import ChefNavbar from './ChefNavbar'
import "../../../styles/ChefDashboard.scss"
import RequestedBooking from './RequestedBooking'
import AcceptedBookings from './AcceptedBookings'
import { CocineroContext } from '../../Context/Context'
import ChefProfile from './ChefProfile'
import ChefSetting from './ChefSetting'
import { logged } from '../../store/userSlice'
import { getChefDetails } from '../../store/chefslice'
import { fetchChefBookings } from '../../../actions/chefAction'
import EditChefProfile from './EditChefProfile'
import walle from "../../../images/walle.jpg"
export default function ChefPage() {
    const currentChef=useSelector((state)=>state.chef.chefDetails)
    const navigate=useNavigate()
    const {chefPage}=useContext(CocineroContext)
    const dispatch=useDispatch()

    useEffect(()=>{
      if(!localStorage.chef){
        navigate("/chef/login")
      }else{
        const chef=JSON.parse(localStorage.chef)
        console.log(chef.id)
        dispatch(logged(true))
        dispatch(getChefDetails(chef))
        dispatch(fetchChefBookings(chef.id))
       
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
          {!chefPage && <img src={walle}/>}
            {chefPage=="callrequestedbooking"&& <RequestedBooking/>}
            {chefPage=="callacceptedbooking" &&<AcceptedBookings/>}
            {chefPage=="callprofile" &&<ChefProfile/>}
            {chefPage=="callsetting" &&<ChefSetting/>}
            {chefPage=="calledit" && <EditChefProfile/>}
         </div>
         </>}
    </div>
  )
}
