import { createContext, useState } from "react";

const CocineroContext=createContext()

function CocineroProvider({children}){
    const [chefs,setChefs]=useState();
    const [lat,setLat]=useState();
    const [lng,setLng]=useState()
    const [comments,setComments]=useState([])
    const [openModal,setOpenModal]=useState(false)
    const [chefid,setChefId]=useState()
    const [chefPage,setChefPage]=useState()
    const [navtoggle,setNavToggle]=useState("User")
    
    return(
        <CocineroContext.Provider
          value={{
            chefs,
            lat,
            setLat,
            lng,
            setLng,
            setChefs,
            comments,
            setComments,
            openModal,
            setOpenModal,
            chefid,setChefId,chefPage,
            setChefPage,
            navtoggle,
            setNavToggle
           
          }}>
            {children}
          </CocineroContext.Provider>
    )
}

export {CocineroContext,CocineroProvider};