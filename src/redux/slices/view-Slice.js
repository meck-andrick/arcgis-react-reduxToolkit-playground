import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: null,
};

export const viewSlice = createSlice({
  name: "viewSlice",
  initialState,
  reducers: {
    setview: (state, action) => {
      state.view = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setview } = viewSlice.actions;

export default viewSlice.reducer;
