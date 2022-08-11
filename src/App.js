import { useContext, useEffect, useState } from "react";
import "./styles/App.scss";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Home_page from "./components/Home/Home_page";
import Login from "./components/Login_Signup/Login";
import Signup from "./components/Login_Signup/Signup";
import Chef from "./components/Chef/Chef";
import ChefLogin from "./components/Chef/ChefLogin";
import ChefData from "./components/Chef/ChefData";
import Dummy from "./components/Context/Dummy";
import ChefDescription from "./components/Chef/ChefDescription";
import { CocineroContext } from "./components/Context/Context";
import { useDispatch, useSelector } from "react-redux";
import { fetchChefBookings, fetchChefs } from "./actions/chefAction";
import { setCurrentUser } from "./components/store/userSlice";
import Navbar from "./components/Navbar/Navbar";
import UserPage from "./components/Pages/UsersPage";
import Modal from "./components/Context/Modal";
import ChefPage from "./components/Pages/ChefDashboard/ChefDashboard";
import { getChefDetails, getChefs } from "./components/store/chefslice";

function App() {
  // const {setNavToogle}=useContext(CocineroContext)
  const location=useLocation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModal,setOpenModal } =
    useContext(CocineroContext);
  const  currentUser = useSelector((store) => store.user.currentUser);
  const currentChef=useSelector((state)=>state.chef.chefDetails)

  useEffect(() => {
    dispatch(fetchChefs());
  }, []);
  
  useEffect(()=>{
    if(!localStorage.chef)return
    const chef=JSON.parse(localStorage.chef)
    dispatch(fetchChefBookings(chef.id))
    dispatch(getChefDetails(chef))
    // setNavToogle("Chef")
    
  },[])

  return (
    <div className="App">
      {openModal && <Modal  openModal={openModal} setOpenModal={setOpenModal}/>}
      <Navbar />
     
      <Routes >
        <Route path="/" element={<Home_page />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/chef/signup" element={<Chef />} />
        <Route path="/chef/login" element={<ChefLogin />} />
        <Route path="/chef/edit" element={<ChefData />} />
        <Route path="/chef/:id" element={<ChefDescription />}></Route>
        <Route path="/bookings" element={currentUser? <UserPage/>:<Login/>} />
        <Route path="/admin" element={currentChef ? <ChefPage/> : <ChefLogin/>}/>
      </Routes>
    </div>
  );
}

export default App;
