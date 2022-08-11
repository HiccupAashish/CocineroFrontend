import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { acceptBooking } from '../../../actions/chefAction'
import "../../../styles/RequestedBooking.scss"

export default function RequestedBooking() {
    const requested=useSelector((state)=>state.booking.bookings)
    const dispatch=useDispatch()
    
    function handleAccept(id){
        dispatch(acceptBooking(id))
    }

  return (
    <div>
        
        {requested &&requested.map((reqbooking)=>(
        //   <h2> {reqbooking.status}</h2>
           <>
            {reqbooking.status=="pending"&&
                <div className='req-bookbox'>
                    <h3>Booking request by: {reqbooking.user_name}</h3>
                    <p> Date: {reqbooking.date}</p>
                    <p> Offered Price: {reqbooking.price}</p>
                    <p> Estimated guest Count: {reqbooking.guest_count}</p>
                    <div className="responsebutton">
                        <button onClick={()=>handleAccept(reqbooking.id)}>Accept</button>
                        <button>Reject</button>
                    </div>
                </div> 
            }   
            </> 
        ))}
        
    </div>
  )
}
