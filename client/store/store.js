import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slice/theme";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export default store;
