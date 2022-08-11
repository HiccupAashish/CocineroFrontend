import React, { useContext, useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router'
import { CocineroContext } from '../Context/Context'
import "../../styles/ChefDescription.scss"
import {ImLocation} from "react-icons/im"
import { useDispatch, useSelector } from 'react-redux'
import { addComment, createLike } from '../../actions/chefAction'
import ChefComments from './ChefComments'
import Modal from '../Context/Modal'

export default function ChefDescription() {

  const data = useSelector((state) => state.chef.eachChef)
  const navigate=useNavigate()
  const commentref=useRef()
    const {id}=useParams()
    
    
    // const {chefs,comments}=useContext(CocineroContext)
    const comments=useSelector((state)=>state.comment.comments)
    const dispatch=useDispatch()
    useEffect(()=>{
      if(data.length==0){
        navigate("/")
      }
    },[])

    // const [openModal,setOpenModal]=useState(false)
    const {openModal,setOpenModal,setChefId}=useContext(CocineroContext)

   useEffect(()=>{
    setChefId(id)
   },[])
    
    function handleComment(id){
        dispatch(addComment(commentref.current.value,id))
    }
    
  return (
    <div>

       {data?.map((data,index)=>(
        <div key={index} className="chef_description">
          <img src={data.img1} alt="profile_img"/>
          <h1>  {data.name} </h1>
          <h3><ImLocation /> {data.address}</h3>
          <button onClick={()=>setOpenModal(!openModal)}>Request a Quote</button>
          <h4>About</h4>
          <p>{data.bio1}</p>
          <h4> Food Speciality</h4>
          <p>{data.bio2}</p>
           <div className="chef_images">
             <img src={data.img2} alt="img2"/>
             <img src={data.img3} alt="img2"/> 
           </div>
           {comments && comments.map((comment)=>(
            (comment.chef_id == id)&&
            <ChefComments comment={comment} key={uuid()}/>
            
           ))}
           <input type="text" ref={commentref}/>
           <button onClick={()=>handleComment(data.id)}>Add comment</button>
           {comments&&comments.map((comment)=>{
            <p>{comment.comment}</p>
           })}
             
          
        </div>
  ))} 

    </div>
  )
}
