import React, { useContext, useEffect } from 'react'
import "../../styles/Map.scss"
import { GoogleMap,Marker,useJsApiLoader } from '@react-google-maps/api'
import { CocineroContext } from '../Context/Context';

export default function MapContainer() {
  const {chefs}=useContext(CocineroContext)
  const containerStyle = {
    width: '95%',
    height: '400px'
  };
//   useEffect(()=>{
//     if(chefs)
//     chefs.data.filter((chef)=>chef.id == 1).map((data)=>{
//       console.log(data.attributes)
//     })
// },[chefs])
  const center = {
    lat: -33.9554986,
    lng: 151.13687916666666
  };
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDThLxKRZkH1bEGPUAycnFn528XkKF6g3w"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  if (!isLoaded) return<div>...</div>

  return (
    <div className='map_box'>
      <h1> Chef Near Me</h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
            {chefs && chefs.data.map((chef)=>(
         <Marker key={chef.id} position={{lat: parseFloat(chef.attributes.lat) ,lng: parseFloat(chef.attributes.lng) }}/>
))}
        
        </GoogleMap>
    </div>
    
  )
}
