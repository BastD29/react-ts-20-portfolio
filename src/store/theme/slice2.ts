import { createSlice } from "@reduxjs/toolkit";
import { IThemeInitialState } from "../../models/store/Theme";
import { RootStateType } from "../configureStore";

const initialState: IThemeInitialState = {
  darkMode: false,
};

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // console.log("state:", state);
      state.darkMode = !state.darkMode;
    },
  },
});

// const getTheme = (state: IThemeInitialState) => state.darkMode;
const getTheme = (state: RootStateType) => state.theme.darkMode;

export const selectors = { getTheme };

export const { actions, reducer } = slice;
