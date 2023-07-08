import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ResponsiveAppBar from "./components/DashBoard/navBar";
import StudentRegistrationPage from "./Pages/Students/StudentRegistrationPage";
import PageNotFound from "./Pages/PageNotFound";
import LoginPage from "./Pages/Login/LoginPage";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ResponsiveAppBar />} />
        <Route path="/student_login" element={<LoginPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
