import "./App.css";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MiniDrawer from "./components/DashBoard/minidrawer";
import LoginPage from "./Pages/Login/LoginPage";
import { Route, Routes, useLocation } from "react-router-dom";

export const App = () => {
  const [mode, setMode] = useState("dark");

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#00796B", // A teal shade
        light: "#4DB6AC", // A lighter shade of teal
      },
      secondary: {
        main: "#FFA000", // An amber shade
        light: "#FFD54F", // A lighter shade of amber
      },
      background: {
        default: "#F5F5F5", // A light gray background
      },
    },
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            paddingTop: 0,
            paddingBottom: 0,
            backgroundColor: "#4DB6AC", // Customize the background color of the List
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#00796B",
            color: "#FFA000", // Customize the text color of the ListItemButton
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: "#00796B",
          },
        },
      },
    },
    typography: {
      fontFamily: "Calibri",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#00796B", // A teal shade
        light: "#4DB6AC", // A lighter shade of teal
      },
      secondary: {
        main: "#FFA000", // An amber shade
        light: "#FFD54F", // A lighter shade of amber
      },
      background: {
        default: "#121212", // A dark gray background
      },
    },
    typography: {
      fontFamily: "Calibri",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });

  const theme = mode === "light" ? lightTheme : darkTheme;
  const location = useLocation();
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
          {location.pathname == "/login" ? (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          ) : (
            <MiniDrawer setMode={setMode} mode={mode} />
          )}
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
