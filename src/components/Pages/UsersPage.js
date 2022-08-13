import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import "../../styles/UsersPage.scss"
import { logged, setCurrentUser } from '../store/userSlice'
export default function UserPage() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{
    if(!localStorage.user){
    navigate("/user/login")
    }else{
      dispatch(logged(true))
      dispatch(setCurrentUser(JSON.parse(localStorage.user)));
    }
  },[])

  return (
    <div className='user_page'>
        Hello Users
    </div>
  )
}
