import React, { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/ChefEditForm.scss";
import { storage } from "../../../Firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { upadateChefData } from "../../../actions/chefAction";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
export default function EditChefProfile() {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [bio1, setBio1] = useState();
  const [bio2, setBio2] = useState();
  const [percent, setPercent] = useState();
  const dispatch = useDispatch();
  const [profile, setProfile] = useState();
  const [image, setImage] = useState();
  const [dp, setDp] = useState();
  const [imageurl, setImageUrl] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(ll);
  };

  async function fileSelector(e) {
    setImage(e.target.files[0]);
  }
  async function fileSelector1(e) {
    if (imageurl.length == 2) {
      imageurl.splice(1, 1);
      setImage(e.target.files[0]);
    } else {
      setImage(e.target.files[0]);
    }
  }
  async function fileSelector2(e) {
    if (imageurl.length == 3) {
      imageurl.splice(2, 1);
      setImage(e.target.files[0]);
    } else {
      setImage(e.target.files[0]);
    }
  }

  useEffect(() => {
    if (!image) return console.log("return");
    console.log(image);
    const storageRef = ref(storage, `/files/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl((oldArray) => [...oldArray, url]);
          console.log(url);
          setImage("");
        });
      }
    );
  }, [image]);

  useEffect(() => {
    if (!dp) return console.log("return");
    // console.log(image);
    const storageRef = ref(storage, `/files/${dp.name}`);
    const uploadTask = uploadBytesResumable(storageRef, dp);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setProfile(url);
          console.log(url);
          setDp("");
        });
      }
    );
  }, [dp]);

  async function DpSelector(e) {
    setDp(e.target.files[0]);
  }

  function handleSubmit() {
    if (
      name &&
      profile &&
      address &&
      coordinates &&
      bio1 &&
      bio2 &&
      imageurl.length === 3
    ) {
      const images = imageurl.join(",");
      dispatch(
        upadateChefData(name, address, bio1, bio2, images, coordinates, profile)
      );
    } else {
      alert("Please fill all the Details to Continue");
    }
  }

  const chefDetails = useSelector((state) => state.chef.chefDetails);
  return (
    <>
      <div key={chefDetails.id} className="chef_edit">
        <div
          className="img"
          style={{
            backgroundImage: `url(${imageurl[0]})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
          }}
        >
          {imageurl.length == 0 && (
            <>
              <label htmlFor="file-upload" className="custom-file-upload">
                Upload Images
              </label>
              <input
                id="file-upload"
                type="file"
                name="image"
                onChange={fileSelector}
              />
            </>
          )}
          <div
            className="profile-picture"
            style={{
              backgroundImage: `url(${profile})`,
              backgroundRepeat: "none",
              backgroundSize: "cover",
            }}
          >
            {!profile && (
              <>
                <label htmlFor="file-upload" className="custom-file-upload">
                  Upload Dp
                </label>
                <input
                  id="file-upload"
                  type="file"
                  name="image"
                  onChange={DpSelector}
                />
              </>
            )}
          </div>
        </div>

        {percent}

        <h1>
          <input
            type="text"
            className="name"
            placeholder={chefDetails.name}
            style={{ textAlign: "center" }}
            onChange={(e) => setName(e.target.value)}
          />
        </h1>
        <h3>
          <ImLocation />
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            className="address"
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
        </h3>

        <h4>About</h4>
        <p>
          {/* <input type="text" placeholder={chefDetails.bio1} onChange={(e)=>setBio1(e.target.value)}/> */}
          <textarea
            onChange={(e) => setBio1(e.target.value)}
            style={{ width: "80%", border: "none" }}
            name="Text1"
            cols="40"
            rows="5"
          >
            Please tell us something about you .....
          </textarea>
        </p>
        <h4> Food Speciality</h4>
        <p>
          {/* <input type="text" placeholder={chefDetails.bio2} onChange={(e)=>setBio2(e.target.value)}/> */}
          <textarea
            onChange={(e) => setBio2(e.target.value)}
            style={{ width: "80%", border: "none" }}
            name="Text1"
            cols="40"
            rows="5"
          >
            What kind of Food do you cook...
          </textarea>
        </p>
        <div className="chef_images">
          <div
            className="img2"
            style={{
              backgroundImage: `url(${chefDetails.img2})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {imageurl.length >= 2 ? (
              <img src={imageurl[1]} alt="main image" />
            ) : (
              <>
                <label htmlFor="file-upload" className="custom-file-upload">
                  Upload Images
                </label>
                <input
                  id="file-upload"
                  type="file"
                  name="image"
                  onChange={fileSelector1}
                />
              </>
            )}
          </div>
          <div
            className="img3"
            style={{
              backgroundImage: `url(${chefDetails.img3})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {imageurl.length >= 3 ? (
              <img src={imageurl[2]} alt="main image" />
            ) : (
              <>
                <label htmlFor="file-upload" className="custom-file-upload">
                  Upload Images
                </label>
                <input
                  id="file-upload"
                  type="file"
                  name="image"
                  onChange={fileSelector2}
                />
              </>
            )}
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
