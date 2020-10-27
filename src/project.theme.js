import {
  createMuiTheme,
  fade,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#000000",
      main: "#000000",
      dark: "#ffffff",
      contrastText: "#ff6347",
    },
    secondary: {
      light: "#FFFFFF",
      main: "#ffffff",
      dark: "#EBEBEB",
      contrastText: "#ff6347",
    },
    error: {
      main: "#FF0000",
    },
    notification: {
      main: fade("#ffffff", 0.4),
      contrastText: fade("#000000", 0.8),
    },
  },
});

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#000000",
//       dark: "#FFFFFF",
//     },
//     secondary: {
//       main: "#f44336",
//       dark: "#e57373",
//     },
//   },
// });

export default theme;
