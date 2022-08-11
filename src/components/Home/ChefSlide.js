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

  const dispatch = useDispatch();
  function handlelike() {}
  return (
    <div
      className="chef_card"
      style={{ backgroundImage: `url(${chef.img1})`, backgroundSize: "cover" }}
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
