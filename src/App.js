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
        main: "#1976D2", // Royal Blue
        light: "#64B5F6", // Lighter shade of Royal Blue
      },
      secondary: {
        main: "#03A9F4", // Light Blue
        light: "#81D4FA", // Lighter shade of Light Blue
      },
      background: {
        default: "#F5F5F5", // Light Gray
      },
    },
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            paddingTop: 0,
            paddingBottom: 0,
            backgroundColor: "#03A9F4", // Customize the background color of the List
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#1976D2", // Customize the background color of ListItemButton
            color: "#FFFFFF", // Text color for ListItemButton
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          // ListItemIcon: {
          //   "& .MuiListItemIcon-root": {
          //     color: "#5c6bc0", // Customize the color here
          //   },
          // },
          paper: {
            overflowY: "scroll", // Enable vertical scrolling
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "#5c6bc0 #f5f5f5", // For Firefox
            "&::-webkit-scrollbar": {
              width: "6px",
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#5c6bc0", // Thumb color
              borderRadius: "3px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#283593", // Thumb color on hover
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f5f5f5", // Track color
            },
            backgroundColor: "#1976D2", // Customize the background color of the Drawer
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
        main: "#1976D2", // Royal Blue (matching the light theme's primary color)
        light: "#64B5F6", // Lighter shade of Royal Blue (matching the light theme's primary color)
      },
      secondary: {
        main: "#03A9F4", // Light Blue (matching the light theme's secondary color)
        light: "#81D4FA", // Lighter shade of Light Blue (matching the light theme's secondary color)
        text: "#ffffff", // Text color for secondary elements
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
