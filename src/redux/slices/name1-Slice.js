import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name1: "Brad",
  age1: "50",
};

export const name1Slice = createSlice({
  name: "name1Slice",
  initialState,
  reducers: {
    setname1: (state, action) => {
      state.name1 = action.payload;
    },
    setage1: (state, action) => {
      state.age1 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setname1 } = name1Slice.actions;
export const { setage1 } = name1Slice.actions;

export default name1Slice.reducer;
