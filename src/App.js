import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ResponsiveAppBar from "./components/navBar";
import StudentRegistration from "./components/studentRegistration";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ResponsiveAppBar />} />
        <Route path="/students" element={<StudentRegistration />} />
      </Routes>
    </div>
  );
};

export default App;
