import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import "../../styles/UsersPage.scss"
export default function UserPage() {

  const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(store)
  // })

  return (
    <div className='user_page'>
        Hello Users
    </div>
  )
}
