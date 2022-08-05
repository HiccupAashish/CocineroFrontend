import { createContext, useState } from "react";

const CocineroContext=createContext()

function CocineroProvider({children}){
    const [chefs,setChefs]=useState();
    const [lat,setLat]=useState();
    const [lng,setLng]=useState()
    
    return(
        <CocineroContext.Provider
          value={{
            chefs,
            lat,
            setLat,
            lng,
            setLng,
            setChefs,
          }}>
            {children}
          </CocineroContext.Provider>
    )
}

export {CocineroContext,CocineroProvider};