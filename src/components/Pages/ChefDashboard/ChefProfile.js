import React from 'react'
import { ImLocation } from 'react-icons/im'
import { useSelector } from 'react-redux'
import ChefDescription from '../../Chef/ChefDescription'

export default function ChefProfile() {
    const chefDetails=useSelector((state)=>state.chef.chefDetails)
  return (
    <>
 <div key={chefDetails.id} className="chef_description">
          <img src={chefDetails.img1} alt="profile_img"/>
          <h1>  {chefDetails.name} </h1>
          <h3><ImLocation /> {chefDetails.address}</h3>
          {/* <button onClick={()=>setOpenModal(!openModal)}>Request a Quote</button> */}
          <h4>About</h4>
          <p>{chefDetails.bio1}</p>
          <h4> Food Speciality</h4>
          <p>{chefDetails.bio2}</p>
           <div className="chef_images">
             <img src={chefDetails.img2} alt="img2"/>
             <img src={chefDetails.img3} alt="img2"/> 
           </div>
           {/* {comments && comments.map((comment)=>(
            (comment.chef_id == id)&&
            <ChefComments comment={comment} key={uuid()}/>
            
           ))} */}
           {/* <input type="text" ref={commentref}/>
           <button onClick={()=>handleComment(chefDetails.id)}>Add comment</button>
           {comments&&comments.map((comment)=>{
            <p>{comment.comment}</p>
           })} */}
             
          
        </div>

    </>
  )
}
