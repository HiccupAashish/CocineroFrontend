import React, { useState, useEffect, useContext } from "react";
import ChefSlide from "./ChefSlide";
import { CocineroContext } from "../Context/Context";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useSelector } from "react-redux";

export default function ChefContainer() {
  // const {chefs,setChefs}=useContext(CocineroContext)

  const chefs = useSelector((state) => state.chef.chefs);
 console.log(chefs)
  console.log(chefs);

  return (
    <div style={{ display: "flex" }}>
      {chefs &&
        chefs.map((chef) => (
          // <Link key={uuid()} to={`/chef/${chef.id}`}>
            <ChefSlide key={chef.id} chef={chef} />
          // </Link>
        ))}
    </div>
  );
}
