import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: [],
};

export const featuresSlice = createSlice({
  name: "featuresSlice",
  initialState,
  reducers: {
    setfeatures: (state, action) => {
      state.features = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setfeatures } = featuresSlice.actions;

export default featuresSlice.reducer;
