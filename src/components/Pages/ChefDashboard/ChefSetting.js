import React, { useContext } from 'react'
import { CocineroContext } from '../../Context/Context'

export default function ChefSetting() {
    const{background,setBackground}=useContext(CocineroContext)
    function handlebg(){
setBackground("black")
    }
  return (
    <div>
        <button onClick={handlebg}> Night Mode</button>
    </div>
  )
}
