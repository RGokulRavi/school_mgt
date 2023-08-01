import React from "react";
import "./styles.css";
import DashBoard from "../DashBoard/DashBoard";
import Master from "../Master/Master";
import Others from "../Others/Others";
import Students from "../Students/Students";
import StudentDetails from "../Students/StudentDetails";
import AddNewStudent from "../Students/AddNewStudent";
import TeacherDetails from "../Teachers/TeacherDetails";
import AddNewTeacher from "../Teachers/AddNewTeacher";
import Teachers from "../Teachers/Teachers";
import StateMaster from "../Master/MasterFolder/StateMaster";

const Body = ({ data }) => {
  const buttons = [
    "Master",
    "Others",
    "Students",
    "StudentDetails",
    "AddNewStudent",
    "Teachers",
    "TeacherDetails",
    "AddNewTeacher",
    "DashBoard",
    "State Master",
  ];

  const renderComponent = () => {
    if (buttons.includes(data)) {
      switch (data) {
        case "DashBoard":
          return <DashBoard />;
        case "State Master":
          return <StateMaster />;
        case "Master":
          return <Master />;
          break;
        case "Others":
          return <Others />;
        case "Students":
          return <Students />;
        case "StudentDetails":
          return <StudentDetails />;
        case "AddNewStudent":
          return <AddNewStudent />;
        case "Teachers":
          return <Teachers />;
        case "TeacherDetails":
          return <TeacherDetails />;
        case "AddNewTeacher":
          return <AddNewTeacher />;
        default:
          return null;
      }
    } else {
      return null;
    }
  };
  // return <div className="bodyDiv">{renderComponent()}</div>;
  if (buttons.includes(data)) {
    switch (data) {
      case "DashBoard":
        return <DashBoard />;
      case "State Master":
        return <StateMaster />;
      case "Master":
        return <Master />;
        break;
      case "Others":
        return <Others />;
      case "Students":
        return <Students />;
      case "StudentDetails":
        return <StudentDetails />;
      case "AddNewStudent":
        return <AddNewStudent />;
      case "Teachers":
        return <Teachers />;
      case "TeacherDetails":
        return <TeacherDetails />;
      case "AddNewTeacher":
        return <AddNewTeacher />;
      default:
        return null;
    }
  }
};

export default Body;
