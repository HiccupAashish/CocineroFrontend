import React, { useState,useEffect, useContext } from 'react'
import ChefSlide from './ChefSlide';
import { CocineroContext } from '../Context/Context';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export default function ChefContainer() {
  
  const {chefs,setChefs}=useContext(CocineroContext)
  
  // useEffect(()=>{
  //   fetch("http://localhost:3000/api/v2/chefs")
  //       .then((resp) => {
  //         return resp.json();
  //       })
  //       .then((data) => {
  //         if (data.error) {
  //           alert(data.error);
  //         } else {
  //           console.log(Object.assign({}, data.chef))
  //               setChefs(Object.assign({}, data.chef)) 
  //         }
  //       });
  // },[])

  
  return (
    
    <div style={{display:"flex"}}>
      {chefs && chefs.data.map((chef)=>(
       <Link key={uuid()} to={`/chef/${chef.id}`}>
           <ChefSlide key={uuid()} chef={chef.attributes}/>
       </Link>
      ))}
     
    </div>
    
  )
}
