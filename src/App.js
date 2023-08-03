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

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#333996",
//       light: "#3c44b126",
//     },
//     secondary: {
//       main: "#f83245",
//       light: "#f8324526",
//     },
//     background: {
//       default: "#f4f5fd",
//     },
//   },
//   overrides: {
//     MuiAppBar: {
//       root: {
//         transform: "translateZ(0)",
//       },
//     },
//   },
//   props: {
//     MuiIconButton: {
//       disableRipple: true,
//     },
//   },
// });

export const App = () => {
  const [mode, setMode] = useState("dark");
  const themeCtx = createTheme({
    palette: {
      mode: mode,
    },
  });

  // const lightTheme = createTheme({
  //   palette: {
  //     type: "light",
  //     primary: {
  //       main: "#2196F3", // Blue color
  //     },
  //     secondary: {
  //       main: "#FF5722", // Orange color
  //     },
  //   },
  //   typography: {
  //     fontFamily: "Arial, sans-serif",
  //   },
  // });

  // const darkTheme = createTheme({
  //   palette: {
  //     type: "dark",
  //     primary: {
  //       main: "#1976D2", // Dark blue color
  //     },
  //     secondary: {
  //       main: "#E64A19", // Dark orange color
  //     },
  //   },
  //   typography: {
  //     fontFamily: "Arial, sans-serif",
  //   },
  // });

  return (
    <ThemeProvider theme={themeCtx}>
      <Paper
        sx={{
          minHeight: "100vh",
          borderRadius: "0px",
        }}
        elevation={4}
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
