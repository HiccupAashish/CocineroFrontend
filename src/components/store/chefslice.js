import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    chefs:null,
    
    chefDetails:null,
    eachChef: [],
    status: 'idle'
}

const chefSlice=createSlice({
    name:'chef',
    initialState,
    reducers:{
       getChefs:(state,action)=>{
        // const images=(action.payload).images.split(",")
        console.log(action.payload)
        state.chefs=(action.payload).map(payload=>payload.attributes)
        // console.log(images)
       },
       getAChef: (state, action) => {
        const getChef = state.chefs.find((chef) => chef.id === action.payload)
        console.log(getChef)
        state.eachChef = [getChef]
       },
       getChefDetails:(state,action)=>{
        state.chefDetails=action.payload
       }
       
       
    }
})

export const{getChefs, getAChef,getChefDetails}=chefSlice.actions
export default chefSlice.reducer
