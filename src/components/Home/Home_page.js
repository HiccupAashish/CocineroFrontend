import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import About from './About'
import Chef from './ChefContainer'
import Search from './Search'

import MapContainer from './MapContainer'
import Navbar from '../Navbar/Navbar'
import ChefContainer from './ChefContainer'

export default function Home_page() {
 const location=useLocation();
 const {currentUser} = useSelector((store) => store.user);

  return (
    <div> 
      <Search/>
      <ChefContainer/>
      <MapContainer/>
    
      {currentUser ? <div>Hi, your are logged in !!</div> : null}
    </div>
  )
}
