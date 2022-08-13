import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  islogged:false,
  userDescription:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      console.log(action.payload)
      state.currentUser = action.payload;
    },
    logout:(state)=>{
      state.currentUser=null
    },
    logged:(state,action)=>{
      state.islogged=action.payload
    },
    setUserInfo:(state,action)=>{
      state.userDescription=action.payload
    }
  },
});

export const { setCurrentUser,logout,logged,setUserInfo } = userSlice.actions;
export default userSlice.reducer;
