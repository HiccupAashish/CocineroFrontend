import React from 'react'
import "../../styles/ChefSlide.scss"
import {AiOutlineLike} from "react-icons/ai"
export default function ChefContianer({chef}) {
  return (
    <div className='chef_card' style={{backgroundImage:`url(${chef.img1})`,backgroundSize:"cover"}}>
      {/* <img src={chef.img1} alt="main_img"/> */}
      <h3> {chef.name}</h3>
        <AiOutlineLike size={30} color="red" fill='red' />
    </div>
  )
}
