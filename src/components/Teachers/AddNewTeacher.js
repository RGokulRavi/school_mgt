import React from "react";

const AddNewTeacher = () => {
  const fieldData = [
    { type: "TextField", name: "initial" },
    { type: "TextField", name: "firstName" },
    { type: "TextField", name: "middleName" },
    { type: "TextField", name: "lastName" },
    { type: "select", name: "religion", values: ["Hindu", "Muslims"] },
    { type: "TextField", name: "address1" },
    { type: "TextField", name: "address2" },
    { type: "TextField", name: "pincode" },
    { type: "TextField", name: "mobile" },
    { type: "TextField", name: "nationality" },
    { type: "TextField", name: "emailId" },
    { type: "TextField", name: "dateOfBirth" },
    { type: "TextField", name: "photoUrl" },
    { type: "TextField", name: "fatherName" },
    { type: "TextField", name: "motherName" },
  ];
  return <div>{fieldData.map((data) => console.log(data))}</div>;
};

export default AddNewTeacher;
