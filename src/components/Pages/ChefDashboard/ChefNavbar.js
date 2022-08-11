import React, { useContext } from 'react'
import "../../../styles/ChefNavbar.scss"
import { CocineroContext } from '../../Context/Context'
export default function ChefNavbar() {
  const {setChefPage,chefPage}=useContext(CocineroContext)

  function handleRequestpage(){
    setChefPage("callrequestedbooking")
  }
  function handleAcceptedBooking(){
    setChefPage("callacceptedbooking")
  }
  function handleEdit(){
    setChefPage("callbooking")
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
       <button onClick={handleProfile}> Profile</button>
       <button onClick={handleEdit}> edit</button>
       <button onClick={handleSetting}> Setting</button>
    </>
  )
}
