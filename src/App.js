import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import ResponsiveAppBar from "./components/DashBoard/navBar";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/Login/LoginPage";
import StudentRegistration from "./components/Students/studentRegistration";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ResponsiveAppBar />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student_registration" element={<StudentRegistration />} />
        <Route path="/logout" element={<Navigate to="/login" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
