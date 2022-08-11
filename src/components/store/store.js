import { configureStore } from "@reduxjs/toolkit";
import chefReducer from "./chefslice";
import userReducer from "./userSlice"
import commentReducer from "./commetSlice";
import bookingReducer from "./bookingSlice";

const store=configureStore({
    reducer:{
        booking:bookingReducer,
        chef: chefReducer,
        user: userReducer,
        comment:commentReducer
    }
})

export default store