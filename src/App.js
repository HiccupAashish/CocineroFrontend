import { useContext, useEffect, useState } from "react";
import "./styles/App.scss"
import { Route,Routes, useLocation } from "react-router-dom";
import Home_page from "./components/Home/Home_page";
import Login from "./components/Login_Signup/Login";
import Signup from "./components/Login_Signup/Signup";
import Chef from "./components/Chef/Chef";
import ChefLogin from "./components/Chef/ChefLogin";
import ChefData from "./components/Chef/ChefData";
import Dummy from "./components/Context/Dummy";
import ChefDescription from "./components/Chef/ChefDescription";
import { CocineroContext } from "./components/Context/Context";

function App() {
  const {chefs,setChefs}=useContext(CocineroContext)
  useEffect(()=>{
    fetch("http://localhost:3000/api/v2/chefs")
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          if (data.error) {
            alert(data.error);
          } else {
            console.log(Object.assign({}, data.chef))
                setChefs(Object.assign({}, data.chef)) 
          }
        });
  },[])
  return (
   
    <div className="App">
      
     <Routes>
         <Route path="/" element ={<Home_page/>}/>
         <Route path ="/user/login" element={<Login/>}/>
         <Route path="/user/signup" element={<Signup/>}/>
         <Route path="/chef/signup" element={<Chef/>}/>
         <Route path="/chef/login" element={<ChefLogin/>}/>
         <Route path="/chef/edit" element={<ChefData/>}/>
         <Route path="/chef/:id" element={<ChefDescription/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
