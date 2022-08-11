import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: null,
  newComment: [],
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getComments: (state, action) => {
      console.log(action.payload);
      state.comments = action.payload;
    },
    addNewCommentToComments: (state, action) => {
      state.comments.unshift(action.payload)
      // state.comments.push(action.payload)
    },
  },
});
export const { getComments, addNewCommentToComments} = commentSlice.actions;
export default commentSlice.reducer;
