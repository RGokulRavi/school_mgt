import React from "react";
import "./styles.css";
// import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

const studentValidationSchema = Yup.object({
  admissionNo: Yup.string().required(),
  registrationNo: Yup.string().required(),
  initial: Yup.string().required(),
  firstName: Yup.string().required("First Name is required").min("2"),
  middleName: Yup.string(),
  lastName: Yup.string(),
  className: Yup.string().required(),
  sectionName: Yup.string(),
  gender: Yup.string().required(),
  administrationType: Yup.string(),
  administrationName: Yup.string(),
  address1: Yup.string().required(),
  address2: Yup.string().required(),
  pincode: Yup.string().required(),
  stateName: Yup.string().required(),
  cityName: Yup.string().required(),
  nationality: Yup.string().required(),
  mobile: Yup.number().required().min(10),
  emailId: Yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: Yup.string().required(),
  religion: Yup.string(),
  community: Yup.string(),
  bloodGroup: Yup.string().required(),
  photoUrl: Yup.string().required(),
  fatherName: Yup.string().required(),
  motherName: Yup.string().required(),
  fatherQualification: Yup.string().required(),
  admmotherQualificationissionNo: Yup.string().required(),
  fatherOccupation: Yup.string().required(),
  motherOccupation: Yup.string().required(),
  fatherAnnualIncome: Yup.string().required(),
  motherAnnualIncome: Yup.string().required(),
  gaurdianName: Yup.string().required(),
  gaurdianOccupation: Yup.string().required(),
  gaurdianQualification: Yup.string().required(),
  caretakerName: Yup.string().required(),
  caretakerOccupation: Yup.string().required(),
  caretakerQualification: Yup.string().required(),
  parentMobileNoA: Yup.string().required(),
  parentMobileNoB: Yup.string().required(),
  parentMobileNo3: Yup.string().required(),
  parentEmailId1: Yup.string().required(),
  parentEmailId2: Yup.string(),
  adharcardNo: Yup.string().required(),
  pancardNo: Yup.string().required(),
  bankName: Yup.string().required(),
  bankBranch: Yup.string().required(),
  accountNo: Yup.string().required(),
  ifscNo: Yup.string().required(),
  certificateProvided: Yup.string().required(),
  administrationId: Yup.string().required(),
});

const StudentRegistration = () => {
  const inputFieldArr = [
    "initial",
    "firstName",
    "middleName",
    "lastName",
    "className",
    "sectionName",
    "gender",
    "address1",
    "address2",
    "pincode",
    "stateName",
    "cityName",
  ];

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        admissionNo: "AD12352",
        registrationNo: "REG56796",
        initial: "R",
        firstName: "GOKUL",
        middleName: "",
        lastName: "KANNAN",
        className: "Grade 8",
        sectionName: "A",
        gender: "Male",
        administrationType: "School",
        administrationName: "ABC School",
        address1: "123 Main Street",
        address2: "Apt 4B",
        pincode: "12345",
        stateName: "TamilNadu",
        cityName: "Thanjavur",
        nationality: "Indian",
        mobile: "9944057983",
        emailId: "gokulravichandran101@gmail.com",
        dateOfBirth: "1998-12-24",
        religion: "Hindu",
        community: "BC",
        bloodGroup: "B+",
        photoUrl: "https://example.com/photo.jpg",
        fatherName: "M.Ravichandran",
        motherName: "R.Nirmala",
        fatherQualification: "Bachelors Degree",
        motherQualification: "Bachelors Degree",
        fatherOccupation: "Farmer",
        motherOccupation: "Home maker",
        fatherAnnualIncome: 50000.0,
        motherAnnualIncome: 60000.0,
        gaurdianName: "",
        gaurdianOccupation: "",
        gaurdianQualification: "",
        caretakerName: "",
        caretakerOccupation: "",
        caretakerQualification: "",
        parentMobileNoA: "8754938477",
        parentMobileNoB: "880774851",
        parentMobileNo3: "",
        parentEmailId1: "gokulravichandran101@gmail.com",
        parentEmailId2: "gokulravichandran101@gmail.com",
        adharcardNo: "1234567890",
        pancardNo: "ABCDE1234F",
        bankName: "ABC Bank",
        bankBranch: "Main Branch",
        accountNo: "9876543210",
        ifscNo: "ABCD1234567",
        certificateProvided: "Yes",
        administrationId: 1,
      },
      validationSchema: studentValidationSchema,
      onSubmit: (newStudent) => {
        addStudent(newStudent);
      },
    });

  const addStudent = (newStudent) => {
    console.log("Then Form Values are:", newStudent);
  };

  const renderFields = () => {
    return inputFieldArr.map((field) => (
      <TextField
        key={field}
        fullWidth
        id={field}
        sx={{ marginBottom: 1 }}
        size="small"
        name={field}
        label={field.charAt(0).toUpperCase() + field.slice(1)}
        value={values[field]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched[field] && Boolean(errors[field])}
        helperText={touched[field] && errors[field]}
      />
    ));
  };

  return (
    <div className="StudentRegistration">
      <Typography sx={{ fontWeight: "bold" }} variant="h6">
        Add Students
      </Typography>
      <div className="addStudentFormDiv">
        <form onSubmit={handleSubmit} className="addStudentForm">
          {renderFields()}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
