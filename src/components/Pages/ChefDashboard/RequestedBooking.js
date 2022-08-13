import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { acceptBooking } from '../../../actions/chefAction'
import "../../../styles/RequestedBooking.scss"
import { useEffect } from 'react'
import { getAbooking, getrequestedbooking, removeFromRequest } from '../../store/bookingSlice'
import { fetchUserInfo } from '../../../actions/userAction'
import { useNavigate } from 'react-router'

export default function RequestedBooking() {
    const bookings=useSelector((state)=>state.booking.bookings)
    const requestedbooking=useSelector((state)=>state.booking.requestedbooking)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    function handleAccept(id){
        dispatch(acceptBooking(id))
    }
    useEffect(()=>{
        dispatch(getrequestedbooking(bookings))
    },[])

    function handleAccept(id){
        dispatch(acceptBooking(id))
     dispatch(removeFromRequest(id))
    }
    function handleDescription(user_id,id){
        dispatch(fetchUserInfo(user_id))
        dispatch(getAbooking(id))
        navigate("/chef/admin/info")
    }
    
  return (
    <div >
        <h1 style={{textAlign:"center"}}> Booking Requests</h1>
        {requestedbooking &&requestedbooking.map((reqbooking)=>(
        
           <>
            {reqbooking.status==="Pending"?
                <div onClick={()=>handleDescription(reqbooking.user_id,reqbooking.id)} key={reqbooking.id} className='req-bookbox'>
                    <h3>Booking request by: {reqbooking.user_name}</h3>
                    <p> Date: {reqbooking.date}</p>
                    <p> Offered Price: {reqbooking.price}</p>
                    <p> Estimated guest Count: {reqbooking.guest_count}</p>
                    <div key={reqbooking.id} className="responsebutton">
                        <button onClick={()=>handleAccept(reqbooking.id)}>Accept</button>
                        <button style={{color:"#dc2f02"}}>Reject</button>
                    </div>
                </div> 
            :<p>No Pending</p>}   
            </> 
        ))}
        
    </div>
  )
}
