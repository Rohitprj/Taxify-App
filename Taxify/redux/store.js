import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  theme: themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
