import { createBrowserHistory } from "history";
import { loggedUser } from "../components/store/bookingSlice";
import { logged, setCurrentUser, setUserInfo } from "../components/store/userSlice";

const history = createBrowserHistory({ window });

export const logInUser = (userInfo) => {
  return async (dispatch) => {
   const fetchloginchef=async()=>{
     const res= await fetch("http://localhost:3000/api/v1/login", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  user: {
                    email: userInfo.email,
                    password: userInfo.password,
                  },
                })
              })
      const data=await res.json();
      return data;
            }
    try{
      const getloggedinfo=await fetchloginchef();
      localStorage.setItem( "user", JSON.stringify(getloggedinfo.user.data.attributes))
      localStorage.setItem("token", getloggedinfo.jwt); 

    }
    catch(err){
      alert(err.message)
    }
  };
};

export const createUser = (userInfo) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          email: userInfo.email,
          username: userInfo.username,
          password: userInfo.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          const errorMsg = data.error;
          alert(errorMsg);
        } else {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.jwt);
          alert("Signed in successfully");

          // dispatch(Signup(data));
          // navigate( "/home");
          // dispatch({ type: "REFRESH_DASHBOARD", data });
        }
      });
  };
};

export const fetchUserInfo=(id)=>{
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/users/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.chef_token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          const errorMsg = data.error;
          alert(errorMsg);
        } else {
          dispatch(setUserInfo(data.user.data.attributes))
        }
      });
  };
};

