import "./App.css";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MiniDrawer from "./components/DashBoard/minidrawer";

export const App = () => {
  const [mode, setMode] = useState("dark");

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#333996",
        light: "#333996",
      },
      secondary: {
        main: "#f8f8f8",
        light: "#333996",
        // light: "#f83245",
      },
      background: {
        default: "#f4f4f4",
      },
    },
    typography: {
      fontFamily: "Calibri",
    },
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 960,
    //     lg: 1280,
    //     xl: 1920,
    //   },
    // },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#333996",
        light: "#3c44b126",
      },
      secondary: {
        main: "#f83245",
        light: "#f8324526",
      },
      background: {
        default: "#333",
      },
    },
    typography: {
      fontFamily: "Calibri",
    },
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 600,
    //     md: 960,
    //     lg: 1280,
    //     xl: 1920,
    //   },
    // },
  });

  const theme = mode === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          minHeight: "100vh",
          borderRadius: "0px",
        }}
        elevation={6}
      >
        <div className="App">
          <MiniDrawer setMode={setMode} mode={mode} />
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
