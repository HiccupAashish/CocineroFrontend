import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        isLoading: false,
        error: "",
        errors: [],
        email:null,
        user: null,
        token:null,
        isLoggedIn: false
    },
    reducers:{
        
        loggedUser:(state,action)=>{
            console.log(action.payload)
            const newUser=action.payload
            state.user=newUser.username
            state.email=newUser.email
            console.log(state.user)
        },
        logout:(state)=>{
            state.user=null
            state.token=null
        } 
       
    }
})

export const {loggedUser,logout} =authSlice.actions
export default authSlice.reducer

// // export const selectCurrentUser=(state)=>state.auth.user
// // export const selectCurrentToken=(state)=>state.auth.token

// const userReducer = (state = { user: null, isLoggedIn: false }, action) => {
// 	switch (action.type) {
// 		case "SIGNING_UP":
// 		case "LOGGING_IN":
// 			return {
// 				...state,
// 				user: action.userInfo
// 			};

// 		case "SIGNUP_SUCCESS":
// 		case "LOGIN_SUCCESS":
// 			return { user: action.data, isLoggedIn: true };

// 		case "LOGGED_OUT":
// 			return { ...state, user: null, isLoggedIn: false };

// 		case "REFRESH_DASHBOARD":
// 			const user = action.data.user || action.data;
// 			return { ...state, user };

// 		default:
// 			return state;
// 	}
// };

// export default userReducer;