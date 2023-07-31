import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import ResponsiveAppBar from "./components/DashBoard/navBar";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/Login/LoginPage";
import StudentRegistration from "./components/Students/studentRegistration";
import Test from "./Test";
import DashBoardPage from "./Pages/DashBoard/DashBoardPage";
import MiniDrawer from "./components/DashBoard/minidrawer";
import MyDatePicker from "./components/Common/DataPicker";
import { ThemeProvider } from "@emotion/react";
import { createMuiTheme } from "@mui/material";
import MasterSubRoutes from "./components/Master/MasterFolder/MasterSubRoutes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<DashBoardPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/:type/:name" element={<MasterSubRoutes />} /> */}
          <Route path="/test" element={<Test />} />
          <Route
            path="/student_registration"
            element={<StudentRegistration />}
          />
          <Route path="/logout" element={<Navigate to="/login" />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
