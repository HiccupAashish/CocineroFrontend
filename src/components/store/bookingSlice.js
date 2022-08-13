import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  requestedbooking: [],
  acceptedbookings: [],
  singlebooking:null
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    storeBookings: (state, action) => {
      action.payload.map((action) => {
        state.bookings.push(action.attributes);
      });
    },
    getrequestedbooking: (state) => {
      if (state.requestedbooking.length == 0) {
        state.requestedbooking = state.bookings.filter((object) => {
          return object.status === "Pending";
        });
        console.log(state.requestedbooking);
      }
    },
    removeFromRequest: (state, action) => {
      for (const obj of state.bookings) {
        if (obj.id === action.payload) {
          obj.status = "Accepted";

          break;
        }
      }
      state.requestedbooking = state.requestedbooking.map((obj) => {
        if (obj.id === action.payload) {
          return { ...obj, status: "Accepted" };
        }
        return obj;
      });
    },
    getAcceptedBookings: (state) => {
      state.acceptedbookings = state.bookings.filter((state) => {
        return state.status === "Accepted";
      });
      console.log(state.acceptedbookings);
    },
    getAbooking:(state,action)=>{
        //  return state.singlebooking
        console.log(state.singlebooking)
        state.singlebooking=state.bookings.filter(state=>{
            return state.id===action.payload
        })
    }
  },
});
export const {
  storeBookings,
  getrequestedbooking,
  removeFromRequest,
  getAcceptedBookings,
  getAbooking,
} = bookingSlice.actions;
export default bookingSlice.reducer;
