import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import "../../../styles/ChefNavbar.scss"
import { CocineroContext } from '../../Context/Context'
import { getAcceptedBookings } from '../../store/bookingSlice'
export default function ChefNavbar() {
  const {setChefPage,chefPage}=useContext(CocineroContext)
  const dispatch=useDispatch()

  function handleRequestpage(){
    setChefPage("callrequestedbooking")
  }
  function handleAcceptedBooking(){
    setChefPage("callacceptedbooking")
    dispatch(getAcceptedBookings())
  }
  function handleEdit(){
    setChefPage("calledit")
  }
  function handleProfile(){
    setChefPage("callprofile")
  }
  function handleSetting(){
    setChefPage("callsetting")
  }
  return (
    < >
       <button onClick={handleRequestpage}> Requested Booking</button>
       <button onClick={handleAcceptedBooking}> Your Bookings</button>
       {/* <button onClick={handleEdit}> Edit</button> */}
       <button onClick={handleProfile}> Profile</button>
       <button onClick={handleSetting}> Setting</button>
    </>
  )
}
