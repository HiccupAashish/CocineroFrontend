import { current } from '@reduxjs/toolkit'
import React, { useContext } from 'react'
import { deleteComment } from '../../actions/chefAction'
import { CocineroContext } from '../Context/Context'

export default function ChefComments({comment}) {
    const {setComments}=useContext(CocineroContext)
    function handledelete(id){
     deleteComment(id)
     setComments(array=> array.filter(id))
     
    }
  return (
    <div>
        {comment.comment}
        <button onClick={()=>handledelete(comment.id)}> Delete</button>
    </div>
  )
}
