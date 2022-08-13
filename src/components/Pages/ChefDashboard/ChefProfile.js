import React, { useContext } from 'react'
import { ImLocation } from 'react-icons/im'
import { useSelector } from 'react-redux'
import ChefDescription from '../../Chef/ChefDescription'
import {AiFillEdit} from 'react-icons/ai'
import { CocineroContext } from '../../Context/Context'

export default function ChefProfile() {
    const chefDetails=useSelector((state)=>state.chef.chefDetails)
    console.log(chefDetails)
    const image = chefDetails.images.split(",")
    console.log(image)
    const {setChefPage,chefPage}=useContext(CocineroContext)
  // const data = chefDetails.map((obj) => {
  //   return { ...obj, images: image[0] };
  // });
  return (
    <>
 <div key={chefDetails.id} className="chef_description">
 <div
              className="img"
              style={{
                backgroundImage: `url(${image[0]})`,
                backgroundRepeat: "none",
                backgroundSize: "cover",
              }}
            >
               <div
                className="profile-picture"
                style={{
                  backgroundImage: `url(${chefDetails.avatar})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              </div>
              <AiFillEdit onClick={()=>setChefPage("calledit")} style={{color:"#23d997"}}/>
          <h1>  {chefDetails.name} </h1>
          <h3><ImLocation /> {chefDetails.address}</h3>
    
          <h4>About</h4>
          <p>{chefDetails.bio1}</p>
          <h4> Food Speciality</h4>
          <p>{chefDetails.bio2}</p>
           <div className="chef_images">
             <img src={image[1]} alt="img2"/>
             <img src={image[2]} alt="img2"/> 
           </div>
          
             
          
        </div>

    </>
  )
}
