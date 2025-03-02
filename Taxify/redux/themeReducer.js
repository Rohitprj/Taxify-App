import { lightTheme, darkTheme } from "../constants/Theme";

const initialState = {
  theme: lightTheme, // Default to light mode
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme.mode === "light" ? darkTheme : lightTheme };
    default:
      return state;
  }
};

export default themeReducer;
