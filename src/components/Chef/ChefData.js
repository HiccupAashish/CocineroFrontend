import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateChef, upadateChefData } from '../../actions/chefAction'
import  PlacesAutocomplete, {
            geocodeByAddress,
            geocodeByPlaceId,
            getLatLng,
        } from 'react-places-autocomplete';
import "../../styles/ChefData.scss"
import { storage } from '../../Firebase/firebase';
import {ref,uploadBytesResumable,getDownloadURL} from "firebase/storage"
 

export default function ChefData() {
    const [hide,setHide]=useState(false)
    const [percent, setPercent] = useState(0);
    const [imageUrl,setImageUrl]=useState([])
    const dispatch=useDispatch()
    const [image,setImage]=useState()
    const [name,setName]=useState()
    const [bio, setBio]=useState()
    const [foodbio, setFoodBio]=useState()   
    const [address,setAddress]=useState()
    const [coordinates,setCoordinates]=useState({
    lat:null,
    lng:null
    })
    const chefInfo={name,bio,foodbio,coordinates,imageUrl,address}
    const handleSelect=async value=>{
    const results= await geocodeByAddress(value)
    const ll=await getLatLng(results[0])
    setAddress(value)
    setCoordinates(ll)
    }

   async function fileSelector(e){
        // console.log(e.target.files)
        setImage(e.target.files[0])       
    }
    function handlebio(e){
        e.preventDefault()
        setBio(e.target.value)
    }
    function handlefood(e){
        e.preventDefault()
        setFoodBio(e.target.value)
    }

    function handlename(e){
        e.preventDefault()
        setName(e.target.value)
    }

    useEffect(()=>{
      if(!image)return console.log("return");
      console.log(image)
        const storageRef=ref(storage,`/files/${image.name}`)
        const uploadTask=uploadBytesResumable(storageRef,image);
        uploadTask.on("state_changed",(snapshot)=>{
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setPercent(percent)
            setHide(true)
        },
        (err) => console.log(err),
        () => {   
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setImageUrl(oldArray => [...oldArray,url] );
                console.log(url)
                setImage('')
                setHide(false)
            });
        }
        )
    
    },[image])

    function handleUpload(){ 
      console.log(chefInfo)
    //   console.log(JSON.parse(localStorage.chef).id)
      dispatch(upadateChefData(chefInfo))
    }

  return (
    <div className="chef_edit">
        {/* <form></form> */}
        <label>Name:</label>
        <input onChange={handlename} type="text"/>
        {/* {coordinates.lat}
       <br/>
       {coordinates.lng} */}
     
       
       <label>Address</label>
       <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        >
            
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div  className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? { backgroundColor: 'lightgreen', cursor: 'pointer' }
                  : { backgroundColor: '#343a40', cursor: 'pointer' };
                return (
                  <div  
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span  >{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        <label>About Me</label>
        <input type="text" onChange={handlebio}/>
        <label> Food Speciality</label>
        <input type="comment" onChange={handlefood}/>
        <label htmlFor="file-upload" className="custom-file-upload">
            Upload Images
        </label>
         <input id="file-upload" type="file" name="image" onChange={fileSelector}/>
         <div className={`image_container ${hide && "blur"}`}>
        {hide && <p>{percent} </p>}
         {imageUrl &&
            imageUrl.map((url)=>(
                    <img key={url} src={url} alt={url}/>  
            ))
            }
               </div>
        <button type="submit" onClick={handleUpload}>Upload</button>
    </div>
  )
}
