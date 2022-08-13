import React, { useContext } from "react";
import "../../styles/ChefSlide.scss";
import { AiFillLike } from "react-icons/ai";

import { CocineroContext } from "../Context/Context";
import { getAChef } from "../store/chefslice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { fetchComments } from "../../actions/chefAction";

export default function ChefContianer({ chef }) {
  const navigate = useNavigate();
  const images=chef.images.split(",")
  const dispatch = useDispatch();
  function handlelike() {}
  return (
    <div
      className="chef_card"
      style={{ backgroundImage: `url(${images[0]})`, backgroundSize: "cover" ,backgroundRepeat:"no-repeat",color:"black"}}
      onClick={() => {
        dispatch(getAChef(chef.id));
        dispatch(fetchComments(chef.id))
        navigate(`/chef/${chef.id}`);
      }}
    >
      <h3> {chef.name}</h3>
      <div className="line"></div>
      
    </div>
  );
}
