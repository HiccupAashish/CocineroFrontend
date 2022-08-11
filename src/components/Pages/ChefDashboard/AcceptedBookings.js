import React from 'react'
import { useSelector } from 'react-redux'

export default function AcceptedBookings() {
    const requested=useSelector((state)=>state.booking.bookings)
  return (
    <div>
        
    {requested &&requested.map((reqbooking)=>(
    //   <h2> {reqbooking.status}</h2>
       <>
        {reqbooking.status=="Accepted"&&
            <div className='req-bookbox'>
                <h3>Booking request by: {reqbooking.user_name}</h3>
                <p> Date: {reqbooking.date}</p>
                <p> Offered Price: {reqbooking.price}</p>
                <p> Estimated guest Count: {reqbooking.guest_count}</p>
                {/* <div className="responsebutton">
                    <button onClick={()=>handleAccept(reqbooking.id)}>Accept</button>
                    <button>Reject</button>
                </div> */}
            </div> 
        }   
        </> 
    ))}
    
</div>
  )
}
