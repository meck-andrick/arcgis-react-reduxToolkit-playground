import { configureStore } from "@reduxjs/toolkit";

import name1Slice from "./slices/name1-Slice";
import featuresSlice from "./slices/features-Slice";
import viewSlice from "./slices/view-Slice";
import ageSlice from "./slices/ageSlice";

export const store = configureStore({
  reducer: {
    name1Slice: name1Slice,
    featuresSlice: featuresSlice,
    viewSlice: viewSlice,
    ageSlice: ageSlice,
  },
  // since we are adding a mapview from arcgis js (which returns a promise, which is not serializable) need to disable check
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
