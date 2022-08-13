import React, { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router";
import { CocineroContext } from "../Context/Context";
import "../../styles/ChefDescription.scss";
import { ImLocation } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { addComment, createLike } from "../../actions/chefAction";
import ChefComments from "./ChefComments";
import Modal from "../Context/Modal";

export default function ChefDescription() {
  const ChefDescription = useSelector((state) => state.chef.eachChef);
  const comments = useSelector((state) => state.comment.comments);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const commentref = useRef();
  const { id } = useParams();

  const image = ChefDescription.map((data) => data.images.split(","));
  const data = ChefDescription.map((obj) => {
    return { ...obj, images: image[0] };
  });


  useEffect(() => {
    if (ChefDescription.length == 0) {
      navigate("/");
    }
  }, []);

  const { openModal, setOpenModal, setChefId } = useContext(CocineroContext);

  useEffect(() => {
    setChefId(id);
  }, []);

  function handleComment(id) {
    if(localStorage.user){
    dispatch(addComment(commentref.current.value, id));
    }else{
      alert("Sorry you have to be logged in to Continue")
    }
  }

  return (
    <div>
      {data &&
        data.map((data, index) => (
          <div key={index} className="chef_description">
            <div
              className="img"
              style={{
                backgroundImage: `url(${data.images[0]})`,
                backgroundRepeat: "none",
                backgroundSize: "cover",
              }}
            >
              <div
                className="profile-picture"
                style={{
                  backgroundImage: `url(${data.avatar})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <h1> {data.name} </h1>
            <h3>
              <ImLocation /> {data.address}
            </h3>
            <button onClick={() => setOpenModal(!openModal)}>
              Request a Quote
            </button>
            <h4>About</h4>
            <p>{data.bio1}</p>
            <h4> Food Speciality</h4>
            <p>{data.bio2}</p>
            <div className="chef_images">
              <img src={data.images[1]} alt="img2" />
              <img src={data.images[2]} alt="img2" />
            </div>
            {comments &&
              comments.map(
                (comment) =>
                  comment.chef_id == id && (
                    <ChefComments comment={comment} key={uuid()} />
                  )
              )}

            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="20"
              style={{ width: "50%", marginTop: "2em" }}
            >
              Comments
            </textarea>
            <button onClick={() => handleComment(data.id)}>Add comment</button>
            {comments &&
              comments.map((comment) => {
                <p>{comment.comment}</p>;
              })}
          </div>
        ))}
    </div>
  );
}
