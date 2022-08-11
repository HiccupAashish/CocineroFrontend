import { createSlice } from "@reduxjs/toolkit"

const initialState={
    bookings:null
}

const bookingSlice=createSlice({
    name:'booking',
    initialState,
    reducers:{
        storeBookings:(state,action)=>{
            state.bookings=action.payload
        }
        
    }
})
export const{storeBookings}=bookingSlice.actions
export default bookingSlice.reducer