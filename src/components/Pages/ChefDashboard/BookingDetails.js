import React from 'react'
import { useSelector } from 'react-redux'

export default function BookingDetails() {
    const userInfo=useSelector(state=>state.user.userDescription)
    const bookingInfo=useSelector(state=>state.booking.singlebooking)
    console.log(userInfo)
    console.log(bookingInfo)

  return (
    <div>
        dfvdfv
    </div>
  )
}
