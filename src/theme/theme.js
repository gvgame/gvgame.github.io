import { black, white, error, warning, info, success } from "./colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  palette: {
    common: {
      black,
      white,
    },
    error: {
      light: error,
      main: error,
      dark: error,
      contrastText: white,
    },
    warning: {
      light: warning,
      main: warning,
      dark: warning,
      contrastText: white,
    },
    info: {
      light: info,
      main: info,
      dark: info,
      contrastText: white,
    },
    success: {
      light: success,
      main: success,
      dark: success,
      contrastText: white,
    },
    navbar: {
      background: "rgba(60, 52, 92, 1)",
      text: "rgba(109, 241, 216, 1)",
    },
    background: {
      paper: black,
      default: black,
      contrast: "rgba(216,216,216,1.0)",
    },
    primary: {
      light: "rgba(15, 54, 87, 1)",
      main: "rgba(211, 12, 184, 1)",
      dark: "rgba(71, 90, 102, 1)",
      contrastText: "rgba(11, 24, 33, 1)",
    },
    secondary: {
      light: "rgba(229, 229, 229, 1)",
      main: "rgb(109, 241, 216, 1)",
      dark: "rgba(58, 74, 84, 1)",
      contrastText: "rgba(255,255,255,1.0)",
    },
    divider: "rgba(58,74,84,1.0)",
    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(255, 255, 255, 1)",
      disabled: "rgba(133, 133, 133, 1)",
      hint: "rgba(137, 137, 137, 1)",
    },
    action: {
      active: "rgba(255, 255, 255, 1)",
      disabled: "rgba(11, 24, 33, 1)",
      disabledBackground: "rgba(71, 90, 102, 1)",
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        borderBottom: "1px solid rgba(216,216,216,1.0)",
        "&$focused": {
          borderBottom: "1px solid rgba(0, 169, 175, 1)",
        },
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "rgba(216,216,216,1.0)",
      },
    },
    MuiButton: {
      outlined: {
        borderColor: "rgba(216,216,216,1.0)",
      },
    },
    MuiSwitch: {
      track: {
        backgroundColor: "rgba(255,255,255,1.0)",
      },
    },
  },
  spacing: 4,
};

export default createMuiTheme(theme);
