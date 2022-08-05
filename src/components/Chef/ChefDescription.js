import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { CocineroContext } from '../Context/Context'
import "../../styles/ChefDescription.scss"
import {ImLocation} from "react-icons/im"
import {BiLike} from "react-icons/bi"
import { useDispatch } from 'react-redux'
import { createLike } from '../../actions/chefAction'

export default function ChefDescription() {
    const {id}=useParams()
    const {chefs}=useContext(CocineroContext)
    const dispatch=useDispatch()
    
    function handleLike(id){
        if(!localStorage.user) return alert("Sorry Bro yourn't logged in");
         dispatch(createLike(id))
        console.log(id)
    }
    
  return (
    <div>
       {chefs &&chefs.data.filter((chef)=>chef.id == id).map((data,index)=>(
        <div key={index} className="chef_description">
          <img src={data.attributes.img1} alt="profile_img"/>
          <h1>  {data.attributes.name} </h1>
          <h2> <BiLike onClick={()=>handleLike(data.attributes.id)}/>Likes</h2>
          <h3><ImLocation /> {data.attributes.address}</h3>
          <button>Request a Quote</button>
          <h4>About</h4>
          <p>{data.attributes.bio1}</p>
          <h4> Food Speciality</h4>
          <p>{data.attributes.bio2}</p>
           <div className="chef_images">
             <img src={data.attributes.img2} alt="img2"/>
             <img src={data.attributes.img3} alt="img2"/> 
           </div>

        </div>
  ))} 
    </div>
  )
}
