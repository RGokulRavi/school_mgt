import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/Login/LoginPage";
import StudentRegistration from "./components/Students/studentRegistration";
import Test from "./Test";
import DashBoardPage from "./Pages/DashBoard/DashBoardPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const App = () => {
  const [mode, setMode] = useState("light");
  const themeCtx = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#333996",
        light: "#3c44b126",
      },
      secondary: {
        main: "#f83245",
        light: "#f8324526",
      },
      background: {
        default: "#f4f4f4",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#333996",
        light: "#3c44b126",
      },
      secondary: {
        main: "#f83245",
        light: "#f8324526",
      },
      background: {
        default: "#f4f4f4",
      },
    },
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
          <Routes>
            <Route
              path="/"
              element={<DashBoardPage setMode={setMode} mode={mode} />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/test" element={<Test />} />
            <Route
              path="/student_registration"
              element={<StudentRegistration />}
            />
            <Route path="/logout" element={<Navigate to="/login" />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
