import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: true,
  },
  reducers: {
    setTheme(state, action) {
      return {
        ...state,
        dark: action.payload,
      };
    },
  },
});

export default themeSlice;
