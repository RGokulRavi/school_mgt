import React, { useState } from "react";
import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Card,
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
  TextField,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MenuItem from "@mui/material/MenuItem";
import previewPhotoss from "../../Image/previewPhoto.png";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import {
  StateAndCitiesList,
  bloodGroup,
  religions,
  grades,
  nationalities,
  communities,
} from "../../Global";

const studentValidationSchema = Yup.object({
  admissionNo: Yup.string().required(),
  registrationNo: Yup.string().required(),
  initial: Yup.string().required(),
  firstName: Yup.string().required("First Name is required").min("2"),
  middleName: Yup.string().required(),
  lastName: Yup.string().required(),
  className: Yup.string().required(),
  sectionName: Yup.string().required(),
  gender: Yup.string().required(),
  administrationType: Yup.string().required(),
  administrationName: Yup.string().required(),
  address1: Yup.string().required(),
  address2: Yup.string().required(),
  pincode: Yup.string().required(),
  stateName: Yup.string().required(),
  cityName: Yup.string().required(),
  nationality: Yup.string().required(),
  mobile: Yup.string().required().min(10),
  emailId: Yup.string()
    .required()
    .email("Invalid email")
    .required("Email is required"),
  dateOfBirth: Yup.string().required(),
  dateOfJoining: Yup.string(),
  religion: Yup.string().required(),
  community: Yup.string().required(),
  bloodGroup: Yup.string().required(),
  photoUrl: Yup.mixed().required("Photo is required"),
  adharcardNo: Yup.string().required(),
  certificateProvided: Yup.string().required(),
  administrationId: Yup.number().required(),
  fatherName: Yup.string().required(),
  motherName: Yup.string().required(),
  fatherQualification: Yup.string().required(),
  motherQualification: Yup.string().required(),
  fatherOccupation: Yup.string().required(),
  motherOccupation: Yup.string().required(),
  fatherAnnualIncome: Yup.number().required(),
  motherAnnualIncome: Yup.number().required(),
  gaurdianName: Yup.string().required(),
  gaurdianOccupation: Yup.string().required(),
  gaurdianQualification: Yup.string().required(),
  caretakerName: Yup.string().required(),
  caretakerOccupation: Yup.string().required(),
  caretakerQualification: Yup.string().required(),
  parentMobileNo1: Yup.string().required(),
  parentMobileNo2: Yup.string().required(),
  parentMobileNo3: Yup.string().required(),
  parentEmailId1: Yup.string().required(),
  parentEmailId2: Yup.string().required(),
  pancardNo: Yup.string(),
  bankName: Yup.string(),
  bankBranch: Yup.string(),
  accountNo: Yup.string(),
  ifscNo: Yup.string(),
});

const AddNewStudent = () => {
  const [newStudent, setNewStudent] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedGrade, setSelectedGrade] = useState();
  let jsonString;
  const theme = useTheme();
  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      // admissionNo: "AD12352",
      // registrationNo: "REG56796",
      // initial: "",
      // firstName: "",
      // middleName: "",
      // lastName: "",
      // className: "",
      // sectionName: "",
      // gender: "",
      // administrationType: "",
      // administrationName: "",
      // address1: "",
      // address2: "",
      // pincode: "",
      // stateName: "",
      // cityName: "",
      // nationality: "",
      // mobile: "",
      // emailId: "",
      // dateOfBirth: "1998-12-24",
      // dateOfJoining: "1998-12-24",
      // religion: "",
      // community: "",
      // bloodGroup: "",
      // photoUrl: "test",
      // adharcardNo: "",
      // certificateProvided: "",
      // administrationId: 1,
      // fatherName: "",
      // motherName: "",
      // fatherQualification: "",
      // motherQualification: "",
      // fatherOccupation: "",
      // motherOccupation: "",
      // fatherAnnualIncome: 150000,
      // motherAnnualIncome: 150000,
      // gaurdianName: "",
      // gaurdianOccupation: "",
      // gaurdianQualification: "",
      // caretakerName: "",
      // caretakerOccupation: "",
      // caretakerQualification: "",
      // parentMobileNo1: "",
      // parentMobileNo2: "",
      // parentMobileNo3: "",
      // parentEmailId1: "",
      // parentEmailId2: "",
      // pancardNo: "ABCDE1234F",
      // bankName: "ABC Bank",
      // bankBranch: "Main Branch",
      // accountNo: "9876543210",
      // ifscNo: "ABCD1234567",
      admissionNo: 1013505463,
      registrationNo: "REG5636546553",
      initial: "",
      firstName: "",
      middleName: "",
      lastName: "",
      className: "",
      sectionName: "",
      gender: "",
      administrationType: "",
      administrationName: "",
      address1: "",
      address2: "",
      pincode: "",
      stateName: "",
      cityName: "",
      nationality: "",
      mobile: "",
      emailId: "",
      dateOfBirth: "1998-12-24",
      dateOfJoining: "2023-08-01",
      religion: "",
      community: "",
      bloodGroup: "",
      photoUrl: "",
      fatherName: "",
      motherName: "",
      fatherQualification: "",
      motherQualification: "",
      fatherOccupation: "",
      motherOccupation: "",
      fatherAnnualIncome: 0,
      motherAnnualIncome: 0,
      gaurdianName: "",
      gaurdianOccupation: "",
      gaurdianQualification: "",
      caretakerName: "",
      caretakerOccupation: "",
      caretakerQualification: "",
      parentMobileNo1: "",
      parentMobileNo2: "",
      parentMobileNo3: "",
      parentEmailId1: "",
      parentEmailId2: "",
      adharcardNo: "",
      pancardNo: "",
      bankName: "",
      bankBranch: "",
      accountNo: "",
      ifscNo: "",
      certificateProvided: "",
      administrationId: 1,
    },
    ValidationSchema: studentValidationSchema,
    onSubmit: (newStudentData) => {
      setNewStudent(newStudentData);
      console.log("Student form Values are:", newStudent);
      PostNewStudent(newStudent);
    },
  });

  return (
    <div className="StudentRegistration">
      <Card className="addStudentFormDiv">
        <form onSubmit={handleSubmit} className="addStudentForm">
          <div className="studentRegistrationHeading">
            <Typography
              color="secondary"
              sx={{ fontWeight: "bold" }}
              fontSize={15}
            >
              Student Detail
            </Typography>
            <Divider />
          </div>
          <div className="studentRequiredFieldsDiv">
            <div className="photo">
              <div className="PassPortSizePhotoDiv">
                <div className="PhotoDiv">
                  {values.photoUrl ? (
                    <img
                      src={URL.createObjectURL(values.photoUrl)}
                      alt="Default Profile"
                      style={{
                        maxWidth: "100px",
                        borderRadius: "10px",
                        backgroundColor: theme.palette.secondary.main,
                      }}
                    />
                  ) : (
                    <img
                      src={previewPhotoss}
                      alt="Default Profile"
                      style={{
                        maxWidth: "100px",
                        borderRadius: "10px",
                        backgroundColor: theme.palette.secondary.main,
                      }}
                    />
                  )}
                </div>
                <div>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    type="file"
                    name="photoUrl"
                    onChange={(event) => {
                      const selectedFile = event.currentTarget.files[0];
                      setFieldValue("photoUrl", selectedFile);
                    }}
                  />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload Photo
                    </Button>
                  </label>
                  {errors.photoUrl && touched.photoUrl && (
                    <div className="error">{errors.photoUrl}</div>
                  )}
                </div>
              </div>

              <div className="studentName">
                <div className="twoInput">
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
                </div>
                <TextField
                  id="filled-basic"
                  label="First Name"
                  variant="outlined"
                  size="small"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
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
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
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
                <Input variant="outlined" type="Date"></Input>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    <DatePicker label="DOB" />
                    <DatePicker
                      label="Controlled picker"
                      value={values.dateOfBirth}
                      // onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider> */}
              </div>
            </div>
            <div className="studentName">
              <TextField
                id="filled-basic"
                label="Mobile Number"
                variant="outlined"
                size="small"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mobile && Boolean(errors.mobile)}
                helperText={
                  touched.mobile && errors.mobile ? errors.mobile : null
                }
              />
              <TextField
                id="filled-basic"
                label="Aadhar Number"
                variant="outlined"
                size="small"
                name="adharcardNo"
                value={values.adharcardNo}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.adharcardNo && Boolean(errors.adharcardNo)}
                helperText={
                  touched.adharcardNo && errors.adharcardNo
                    ? errors.adharcardNo
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="Email"
                variant="outlined"
                size="small"
                name="emailId"
                value={values.emailId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.emailId && Boolean(errors.emailId)}
                helperText={
                  touched.emailId && errors.emailId ? errors.emailId : null
                }
              />
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    marginBottom: 2,
                  }}
                  id="demo-simple-select-label"
                >
                  Blood Group
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="bloodGroup"
                  name="bloodGroup"
                  value={values.bloodGroup}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.bloodGroup && Boolean(errors.bloodGroup)}
                  helperText={
                    touched.bloodGroup && errors.bloodGroup
                      ? errors.bloodGroup
                      : null
                  }
                >
                  {bloodGroup.map((data) => (
                    <MenuItem key={data.type} value={data.type}>
                      {data.type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <TextField
                id="filled-basic"
                label="Nationality"
                variant="outlined"
                size="small"
                name="nationality"
                value={values.nationality}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.nationality && Boolean(errors.nationality)}
                helperText={
                  touched.nationality && errors.nationality
                    ? errors.nationality
                    : null
                }
              /> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Nationality
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="nationality"
                  name="nationality"
                  value={values.nationality}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.nationality && Boolean(errors.nationality)}
                  helperText={
                    touched.nationality && errors.nationality
                      ? errors.nationality
                      : null
                  }
                >
                  {nationalities.map((data) => (
                    <MenuItem value={data.name}>{data.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Religion</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="religion"
                  name="religion"
                  value={values.religion}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.religion && Boolean(errors.religion)}
                  helperText={
                    touched.religion && errors.religion ? errors.religion : null
                  }
                >
                  {religions.map((data) => (
                    <MenuItem value={data.name}>{data.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Community</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="community"
                  name="community"
                  value={values.community}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.community && Boolean(errors.community)}
                  helperText={
                    touched.community && errors.community
                      ? errors.community
                      : null
                  }
                >
                  {communities.map((data) => (
                    <MenuItem value={data.name}>{data.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="twoInput">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Class</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    label="Class"
                    name="className"
                    value={values.className}
                    // onChange={handleChange}
                    onChange={(event) => {
                      handleChange(event);
                      setSelectedGrade(event.target.value);
                    }}
                    onBlur={handleBlur}
                    error={touched.className && Boolean(errors.className)}
                    helperText={
                      touched.className && errors.className
                        ? errors.className
                        : null
                    }
                  >
                    {grades.map((data) => (
                      <MenuItem value={data.grade}>{data.grade}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Section</InputLabel>
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
                    {grades.map((data) => {
                      if (data.grade === selectedGrade) {
                        return data.section.map((data) => (
                          <MenuItem key={data} value={data}>
                            {data}
                          </MenuItem>
                        ));
                      }
                      return null;
                    })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="administrationDetails">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Adminstration Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="administrationType"
                  name="administrationType"
                  value={values.administrationType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.administrationType &&
                    Boolean(errors.administrationType)
                  }
                  helperText={
                    touched.administrationType && errors.administrationType
                      ? errors.administrationType
                      : null
                  }
                >
                  <MenuItem value="School">School</MenuItem>
                  <MenuItem value="College">College</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Administration Name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="administrationName"
                  name="administrationName"
                  value={values.administrationName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.administrationName &&
                    Boolean(errors.administrationName)
                  }
                  helperText={
                    touched.administrationName && errors.administrationName
                      ? errors.administrationName
                      : null
                  }
                >
                  <MenuItem value="Kst School">Kst School</MenuItem>
                  <MenuItem value="Kst College">Kst College</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="filled-basic"
                label="Address (Ex: Door No)"
                variant="outlined"
                size="small"
                name="address1"
                value={values.address1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.address1 && Boolean(errors.address1)}
                helperText={
                  touched.address1 && errors.address1 ? errors.address1 : null
                }
              />

              <TextField
                id="filled-basic"
                label="Address (Ex: Street Name)"
                variant="outlined"
                size="small"
                name="address2"
                value={values.address2}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.address2 && Boolean(errors.address2)}
                helperText={
                  touched.address2 && errors.address2 ? errors.address2 : null
                }
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="stateName"
                  name="stateName"
                  value={values.stateName}
                  // onChange={handleChange}
                  onChange={(event) => {
                    handleChange(event);
                    setSelectedState(event.target.value);
                  }}
                  onBlur={handleBlur}
                  error={touched.stateName && Boolean(errors.stateName)}
                  helperText={
                    touched.stateName && errors.stateName
                      ? errors.stateName
                      : null
                  }
                >
                  {StateAndCitiesList.map((data) => (
                    <MenuItem value={data.state} key={data.state}>
                      {data.state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="cityName"
                  name="cityName"
                  value={values.cityName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.cityName && Boolean(errors.cityName)}
                  helperText={
                    touched.cityName && errors.cityName ? errors.cityName : null
                  }
                >
                  {StateAndCitiesList.map((data) => {
                    if (data.state === selectedState) {
                      return data.city.map((cityData) => (
                        <MenuItem key={cityData} value={cityData}>
                          {cityData}
                        </MenuItem>
                      ));
                    }
                    return null;
                  })}
                </Select>
              </FormControl>

              <TextField
                id="filled-basic"
                label="Pincode"
                variant="outlined"
                size="small"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.pincode && Boolean(errors.pincode)}
                helperText={
                  touched.pincode && errors.pincode ? errors.pincode : null
                }
              />
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  sx={{ marginRight: "auto" }}
                >
                  Certificatate Provided
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="certificateProvided"
                  value={values.certificateProvided}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio size="small" />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio size="small" />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </form>
      </Card>
      <Card className="addStudentFormDiv">
        <form onSubmit={handleSubmit} className="addStudentForm">
          <div className="studentRegistrationHeading">
            <Typography
              color="secondary"
              sx={{ fontWeight: "bold" }}
              fontSize={15}
            >
              Parent Detail
            </Typography>
            <Divider />
          </div>
          <div className="studentRequiredFieldsDiv">
            <div className="parentName">
              <TextField
                id="filled-basic"
                label="Father Name"
                variant="outlined"
                size="small"
                name="fatherName"
                value={values.fatherName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.fatherName && Boolean(errors.fatherName)}
                helperText={
                  touched.fatherName && errors.fatherName
                    ? errors.fatherName
                    : null
                }
              />
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    marginBottom: 2,
                  }}
                  id="demo-simple-select-label"
                >
                  Father's Qualification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="fatherQualification"
                  name="fatherQualification"
                  value={values.fatherQualification}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.fatherQualification &&
                    Boolean(errors.fatherQualification)
                  }
                  helperText={
                    touched.fatherQualification && errors.fatherQualification
                      ? errors.fatherQualification
                      : null
                  }
                >
                  <MenuItem value="BE">BE</MenuItem>
                  <MenuItem value="BSC">BSC</MenuItem>
                  <MenuItem value="MBBS">MBBS</MenuItem>
                  <MenuItem value="ME">ME</MenuItem>
                  <MenuItem value="Diplomo">Diplomo</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="filled-basic"
                label="Father's Occupation"
                variant="outlined"
                size="small"
                name="fatherOccupation"
                value={values.fatherOccupation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.fatherOccupation && Boolean(errors.fatherOccupation)
                }
                helperText={
                  touched.fatherOccupation && errors.fatherOccupation
                    ? errors.fatherOccupation
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="Father's Annual Income"
                variant="outlined"
                size="small"
                name="fatherAnnualIncome"
                value={values.fatherAnnualIncome}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.fatherAnnualIncome &&
                  Boolean(errors.fatherAnnualIncome)
                }
                helperText={
                  touched.fatherAnnualIncome && errors.fatherAnnualIncome
                    ? errors.fatherAnnualIncome
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="Father's Email ID"
                variant="outlined"
                size="small"
                name="parentEmailId1"
                value={values.parentEmailId1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.parentEmailId1 && Boolean(errors.parentEmailId1)}
                helperText={
                  touched.parentEmailId1 && errors.parentEmailId1
                    ? errors.parentEmailId1
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="Father's Phone No"
                variant="outlined"
                size="small"
                name="parentMobileNo1"
                value={values.parentMobileNo1}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.parentMobileNo1 && Boolean(errors.parentMobileNo1)
                }
                helperText={
                  touched.parentMobileNo1 && errors.parentMobileNo1
                    ? errors.parentMobileNo1
                    : null
                }
              />
            </div>
            <div className="parentName">
              <TextField
                id="filled-basic"
                label="Mother Name"
                variant="outlined"
                size="small"
                name="motherName"
                value={values.motherName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.motherName && Boolean(errors.motherName)}
                helperText={
                  touched.motherName && errors.motherName
                    ? errors.motherName
                    : null
                }
              />
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    marginBottom: 2,
                  }}
                  id="demo-simple-select-label"
                >
                  Mother's Qualification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="motherQualification"
                  name="motherQualification"
                  value={values.motherQualification}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.motherQualification &&
                    Boolean(errors.motherQualification)
                  }
                  helperText={
                    touched.motherQualification && errors.motherQualification
                      ? errors.motherQualification
                      : null
                  }
                >
                  <MenuItem value="BE">BE</MenuItem>
                  <MenuItem value="BSC">BSC</MenuItem>
                  <MenuItem value="MBBS">MBBS</MenuItem>
                  <MenuItem value="ME">ME</MenuItem>
                  <MenuItem value="Diplomo">Diplomo</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="filled-basic"
                label="Mother's Occupation"
                variant="outlined"
                size="small"
                name="motherOccupation"
                value={values.motherOccupation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.motherOccupation && Boolean(errors.motherOccupation)
                }
                helperText={
                  touched.motherOccupation && errors.motherOccupation
                    ? errors.motherOccupation
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="Mother's Annual Income"
                variant="outlined"
                size="small"
                name="motherAnnualIncome"
                value={values.motherAnnualIncome}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.motherAnnualIncome &&
                  Boolean(errors.motherAnnualIncome)
                }
                helperText={
                  touched.motherAnnualIncome && errors.motherAnnualIncome
                    ? errors.motherAnnualIncome
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="Mother's Email ID"
                variant="outlined"
                size="small"
                name="parentEmailId2"
                value={values.parentEmailId2}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.parentEmailId2 && Boolean(errors.parentEmailId2)}
                helperText={
                  touched.parentEmailId2 && errors.parentEmailId2
                    ? errors.parentEmailId2
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="Mother's Phone No"
                variant="outlined"
                size="small"
                name="parentMobileNo2"
                value={values.parentMobileNo2}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.parentMobileNo2 && Boolean(errors.parentMobileNo2)
                }
                helperText={
                  touched.parentMobileNo2 && errors.parentMobileNo2
                    ? errors.parentMobileNo2
                    : null
                }
              />
            </div>
            <div className="parentName">
              <TextField
                id="filled-basic"
                label="Gaurdian Name"
                variant="outlined"
                size="small"
                name="gaurdianName"
                value={values.gaurdianName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.gaurdianName && Boolean(errors.gaurdianName)}
                helperText={
                  touched.gaurdianName && errors.gaurdianName
                    ? errors.gaurdianName
                    : null
                }
              />
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    marginBottom: 2,
                  }}
                  id="demo-simple-select-label"
                >
                  Gaurdian's Qualification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="gaurdianQualification"
                  name="gaurdianQualification"
                  value={values.gaurdianQualification}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.gaurdianQualification &&
                    Boolean(errors.gaurdianQualification)
                  }
                  helperText={
                    touched.gaurdianQualification &&
                    errors.gaurdianQualification
                      ? errors.gaurdianQualification
                      : null
                  }
                >
                  <MenuItem value="BE">BE</MenuItem>
                  <MenuItem value="BSC">BSC</MenuItem>
                  <MenuItem value="MBBS">MBBS</MenuItem>
                  <MenuItem value="ME">ME</MenuItem>
                  <MenuItem value="Diplomo">Diplomo</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="filled-basic"
                label="Gaurdian's Occupation"
                variant="outlined"
                size="small"
                name="gaurdianOccupation"
                value={values.gaurdianOccupation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.gaurdianOccupation &&
                  Boolean(errors.gaurdianOccupation)
                }
                helperText={
                  touched.gaurdianOccupation && errors.gaurdianOccupation
                    ? errors.gaurdianOccupation
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="Caretaker Name"
                variant="outlined"
                size="small"
                name="caretakerName"
                value={values.caretakerName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.caretakerName && Boolean(errors.caretakerName)}
                helperText={
                  touched.caretakerName && errors.caretakerName
                    ? errors.caretakerName
                    : null
                }
              />
              <FormControl fullWidth>
                <InputLabel
                  sx={{
                    marginBottom: 2,
                  }}
                  id="demo-simple-select-label"
                >
                  Caretaker's Qualification
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="caretakerQualification"
                  name="caretakerQualification"
                  value={values.caretakerQualification}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.caretakerQualification &&
                    Boolean(errors.caretakerQualification)
                  }
                  helperText={
                    touched.caretakerQualification &&
                    errors.caretakerQualification
                      ? errors.caretakerQualification
                      : null
                  }
                >
                  <MenuItem value="BE">BE</MenuItem>
                  <MenuItem value="BSC">BSC</MenuItem>
                  <MenuItem value="MBBS">MBBS</MenuItem>
                  <MenuItem value="ME">ME</MenuItem>
                  <MenuItem value="Diplomo">Diplomo</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="filled-basic"
                label="Caretaker's Occupation"
                variant="outlined"
                size="small"
                name="caretakerOccupation"
                value={values.caretakerOccupation}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.caretakerOccupation &&
                  Boolean(errors.caretakerOccupation)
                }
                helperText={
                  touched.caretakerOccupation && errors.caretakerOccupation
                    ? errors.caretakerOccupation
                    : null
                }
              />
            </div>
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

async function PostNewStudent(newStudent) {
  try {
    const response = await axios.post(
      "http://192.168.0.127:1010/admin/registration/student",
      newStudent
    );
    console.log("POST request successful:", response.data);
  } catch (error) {
    console.error("Error sending POST request:", error);
  }
}

export default AddNewStudent;
