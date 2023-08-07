import React from "react";
import "./styles.css";
import DashBoard from "../DashBoard/DashBoard";
import Others from "../Others/Others";
import Students from "../Students/Students";
import StudentDetails from "../Students/StudentDetails";
import AddNewStudent from "../Students/AddNewStudent";
import TeacherDetails from "../Teachers/TeacherDetails";
import AddNewTeacher from "../Teachers/AddNewTeacher";
import Teachers from "../Teachers/Teachers";
import StateMaster from "../Master/MasterFolder/StateMaster";
import AddParent from "../Students/AddParent";

const Body = ({ data }) => {
  const buttons = [
    "Others",
    "Students",
    "StudentDetails",
    "AddNewStudent",
    "AddParent",
    "Teachers",
    "TeacherDetails",
    "AddNewTeacher",
    "DashBoard",
    "State",
  ];

  const renderComponent = () => {
    if (buttons.includes(data)) {
      switch (data) {
        case "DashBoard":
          return <DashBoard />;
        case "State":
          return <StateMaster />;
        case "Others":
          return <Others />;
        case "Students":
          return <Students />;
        case "AddParent":
          return <AddParent />;
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
