import { createTheme } from "@mui/material";

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          padding: "0",
          margin: "0",
          boxSizing: "border-box",
        },
      },
    },
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontWeight: 600,
      fontSize: "2.5rem",
    },
  },
});

export default theme;
