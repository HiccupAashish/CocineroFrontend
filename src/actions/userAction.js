
import { createBrowserHistory } from "history";
import { loggedUser } from "../components/store/authSlice";

const history=createBrowserHistory({window})

// export const fetchCurrentUser = () => {
// 	return (dispatch) => {
// 		// return fetch("http://localhost:3000/authorized", {
// 		return fetch("http://localhost:3000/api/v1/users", {
// 			headers: {
// 				"Content-Type": "application/json",
// 				Accept: "application/json",
// 				Authorization: localStorage.token
// 			}
// 		})
// 			.then((resp) => {
// 				return resp.json();
// 			})
// 			.then((data) => {
// 				if (data.error) {
// 					localStorage.removeItem("token");
// 					localStorage.removeItem("user");
// 				} else {
// 					dispatch({ type: "LOGIN_SUCCESS", data });
// 					window.history.pushState(data.user, "", "/dashboard");
// 				}
// 			});
// 	};
// };

export const logInUser =  (userInfo) => {
	return (dispatch) => {
		fetch("http://localhost:3000/api/v1/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({ 
                user:{
                    email:userInfo.email,
                    password:userInfo.password
                }  })
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				if (data.error) {
					alert(data.error);
				} else {
                    console.log(data)
					localStorage.setItem("user", JSON.stringify(data.user.data.attributes));
					localStorage.setItem("token", data.jwt);
					console.log(localStorage.token)
					// dispatch(loginUser(data.user.data.attributes));
					// window.history.pushState(data.user, "", "/");
					
					// history.push("/")
					// // window.history.reload()
					window.location.replace("/");
					// dispatch(loggedUser(JSON.stringify(data.user.data.attributes)))
					
					

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
               user:{
                email:userInfo.email,
                username:userInfo.username,
                password:userInfo.password,
               }
             })
		})
			.then(res=>res.json())
			.then((data) => {
                
				if (data.error) {
					const errorMsg = data.error;
					alert(errorMsg);
				} else {
                    console.log(data)
					localStorage.setItem("user", JSON.stringify(data.user));
					localStorage.setItem("token", data.jwt);
                    alert("Signed in successfully")
				
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