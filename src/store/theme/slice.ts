import { createSlice } from "@reduxjs/toolkit";
import { IThemeInitialState } from "../../models/store/Theme";

const initialState: IThemeInitialState = {
  theme: "light",
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // setDarkTheme: (state, action) => {
    //   state.theme = action.payload;
    // },
    toggleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

const getTheme = (state: IThemeInitialState) => state.theme;

export const selectors = { getTheme };

export const { actions, reducer } = slice;
