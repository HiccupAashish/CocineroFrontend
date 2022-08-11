import React, { useContext, useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../actions/chefAction";
import "../../styles/Modal.scss";
import { CocineroContext } from "./Context";

export default function Modal({ openModal, setOpenModal }) {
  const [address, setAddress] = useState();
  const [name,setName]=useState()
  const [price,setPrice]=useState()
  const [date,setDate]=useState()
  const [guest,setGuest]=useState()
  const dispatch=useDispatch()
  const {chefid}=useContext(CocineroContext)
  const currentUser=useSelector((state)=>state.user.currentUser)
  
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    setAddress(value);
  };

  function handleName(e){
    setName(e.target.value)
  }
  function handlePrice(e){
    setPrice(e.target.value)
}
function handleDate(e){
    setDate(e.target.value)
}
function handleGuest(e){
    setGuest(e.target.value)
}

function handleSubmit(){
    
    const userid=(currentUser).id
    console.log(userid)
    console.log(chefid)
    if (guest && name && price && date && address){
    dispatch(createBooking(guest,name,price,date,address,userid,chefid))
    }else{
        console.log("wrong")
    }
}

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Fill your details</h1>
        </div>
        <div className="body">
          {/* <p>The next page looks amazing. Hope you want to go there!</p>
           */}

          <label htmlFor="name">Name:</label>
          <input onChange={handleName} id="name" type="text" />

          <label htmlFor="date">Date:</label>
          <input onChange={handleDate}  id="date" type="date" />

          <label htmlFor="price">Offered Price:</label>
          <input onChange={handlePrice}  id="price" type="price" />

          <label htmlFor="address">Your Address:</label>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    const style = suggestion.active
                      ? { backgroundColor: "lightgreen", cursor: "pointer" }
                      : { backgroundColor: "#343a40", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <label htmlFor="guest">Guest Count:</label>
          <input onChange={handleGuest}  id="guest" type="number" />
        </div>
        <div className="footer">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
