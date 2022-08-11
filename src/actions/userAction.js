import { createBrowserHistory } from "history";
import { loggedUser } from "../components/store/bookingSlice";
import { setCurrentUser } from "../components/store/userSlice";

const history = createBrowserHistory({ window });

export const logInUser = (userInfo) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
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
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          dispatch(setCurrentUser(data.user));
          localStorage.setItem(
            "user",
            JSON.stringify(data.user)
          );
          localStorage.setItem("token", data.jwt);
       
          
        }
      });
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

// export const refreshDashboard = (userInfo) => {
// 	return (dispatch) => {
// 		const { id } = userInfo;

// 		// fetch(`http://localhost:3000/users/${id}`)
// 		fetch(`https://my-travelogue.herokuapp.com/users/${id}`)
// 			.then((resp) => {
// 				return resp.json();
// 			})
// 			.then((data) => {
// 				if (data.error) {
// 					alert(data.error);
// 				} else {
// 					dispatch({ type: "REFRESH_DASHBOARD", data });
// 				}
// 			});
// 	};
// };
