import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  age: 30,
};

export const ageSlice = createSlice({
  name: "name1Slice",
  initialState,
  reducers: {
    setage: (state, action) => {
      state.age = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setage } = ageSlice.actions;

export default ageSlice.reducer;
