import React from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import { Field, useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DatePickerValue from "../Common/DataPicker";
import BasicDatePicker from "../Common/DataPicker";

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
const AddNewStudent = () => {
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

  const studentRequiredFields = [
    { type: "TextField", typeName: "initial" },
    { type: "TextField", typeName: "firstName" },
    { type: "TextField", typeName: "middleName" },
    { type: "TextField", typeName: "lastName" },
    {
      type: "Select",
      typeName: "religion",
      selectValues: ["Hindu", "Muslims"],
    },
    {
      type: "Radio",
      typeName: "gender",
      radioValues: ["Male", "Female"],
    },
    { type: "TextField", typeName: "emailId" },
    { type: "TextField", typeName: "dateOfBirth" },
    { type: "TextField", typeName: "photoUrl" },
    { type: "TextField", typeName: "nationality" },
    { type: "TextField", typeName: "mobile" },
  ];

  const parantRequiredFeilds = [
    { type: "TextField", typeName: "address1" },
    { type: "TextField", typeName: "address2" },
    { type: "TextField", typeName: "pincode" },
    { type: "TextField", typeName: "fatherName" },
    { type: "TextField", typeName: "motherName" },
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
  return (
    <div className="StudentRegistration">
      <div className="addStudentFormDiv">
        <div className="studentRegistrationHeading">
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Student Detail
          </Typography>

          <Divider />
          <form onSubmit={handleSubmit} className="addStudentForm">
            <div className="studentRequiredFieldsDiv">
              <div className="PassPortSizePhotoDiv">Photo</div>
              <div className="StudentsFields">
                <div className="studentName">
                  <TextField
                    id="filled-basic"
                    label="Initial"
                    variant="outlined"
                    size="small"
                    name="initial"
                    value={values.initial}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.initial && Boolean(errors.initial)}
                    helperText={
                      touched.initial && errors.initial ? errors.initial : null
                    }
                  />
                  <TextField
                    id="filled-basic"
                    label="First Name"
                    variant="outlined"
                    size="small"
                    name="firstName" // Use 'name' instead of 'firstName'
                    value={values.firstName}
                    onChange={handleChange} // Provide 'onChange' to update the value
                    onBlur={handleBlur}
                    error={touched.firstName && Boolean(errors.firstName)}
                    helperText={
                      touched.firstName && errors.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                  <TextField
                    id="filled-basic"
                    label="Middle Name"
                    variant="outlined"
                    size="small"
                    name="middleName"
                    value={values.middleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.middleName && Boolean(errors.middleName)}
                    helperText={
                      touched.middleName && errors.middleName
                        ? errors.middleName
                        : null
                    }
                  />
                  <TextField
                    id="filled-basic"
                    label="Last Name"
                    variant="outlined"
                    size="small"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.lastName && Boolean(errors.lastName)}
                    helperText={
                      touched.lastName && errors.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Class</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      size="small"
                      label="Class"
                      name="className"
                      value={values.className}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.className && Boolean(errors.className)}
                      helperText={
                        touched.className && errors.className
                          ? errors.className
                          : null
                      }
                    >
                      <MenuItem value={1}>I</MenuItem>
                      <MenuItem value={2}>II</MenuItem>
                      <MenuItem value={3}>III</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Section
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      size="small"
                      label="Class"
                      name="sectionName"
                      value={values.sectionName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.sectionName && Boolean(errors.sectionName)}
                      helperText={
                        touched.sectionName && errors.sectionName
                          ? errors.sectionName
                          : null
                      }
                    >
                      <MenuItem value={1}>A</MenuItem>
                      <MenuItem value={2}>B</MenuItem>
                      <MenuItem value={3}>C</MenuItem>
                    </Select>
                  </FormControl>
                  <Input variant="outlined" type="Date"></Input>
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      sx={{ marginRight: "auto" }}
                    >
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio size="small" />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio size="small" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio size="small" />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewStudent;
