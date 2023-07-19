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
  ];

  const renderComponent = () => {
    if (buttons.includes(data)) {
      switch (data) {
        case "DashBoard":
          return <DashBoard />;
        case "Master":
          return <Master />;
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
  return <div className="bodyDiv">{renderComponent()}</div>;
};

export default Body;
