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
import MenuItem from "@mui/material/MenuItem";
import { StudentData } from "../../Global";

const studentValidationSchema = Yup.object({
  admissionNo: Yup.string(),
  registrationNo: Yup.string(),
  initial: Yup.string(),
  firstName: Yup.string().required("First Name is required").min("2"),
  middleName: Yup.string(),
  lastName: Yup.string(),
  className: Yup.string(),
  sectionName: Yup.string(),
  gender: Yup.string(),
  administrationType: Yup.string(),
  administrationName: Yup.string(),
  address1: Yup.string(),
  address2: Yup.string(),
  pincode: Yup.string(),
  stateName: Yup.string(),
  cityName: Yup.string(),
  nationality: Yup.string(),
  mobile: Yup.string().min(10),
  emailId: Yup.string().email("Invalid email").required("Email is required"),
  dateOfBirth: Yup.string(),
  religion: Yup.string(),
  community: Yup.string(),
  bloodGroup: Yup.string(),
  photoUrl: Yup.string(),
  adharcardNo: Yup.string(),
  certificateProvided: Yup.string(),
  administrationId: Yup.string(),
});

const parentValidationSchema = Yup.object({
  admissionNo: Yup.string(),
  registrationNo: Yup.string(),
  fatherName: Yup.string(),
  motherName: Yup.string(),
  fatherQualification: Yup.string(),
  motherQualification: Yup.string(),
  fatherOccupation: Yup.string(),
  motherOccupation: Yup.string(),
  fatherAnnualIncome: Yup.string(),
  motherAnnualIncome: Yup.string(),
  gaurdianName: Yup.string(),
  gaurdianOccupation: Yup.string(),
  gaurdianQualification: Yup.string(),
  caretakerName: Yup.string(),
  caretakerOccupation: Yup.string(),
  caretakerQualification: Yup.string(),
  parentMobileNoA: Yup.string(),
  parentMobileNoB: Yup.string(),
  parentMobileNo3: Yup.string(),
  parentEmailId1: Yup.string(),
  parentEmailId2: Yup.string(),
});

const AddNewStudent = () => {
  const [parent, setParent] = useState(false);
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: !parent
        ? {
            admissionNo: "AD12352",
            registrationNo: "REG56796",
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
            dateOfBirth: "",
            religion: "",
            community: "",
            bloodGroup: "",
            photoUrl: "test",
            adharcardNo: "",
            certificateProvided: "",
            administrationId: 1,
          }
        : {
            admissionNo: "AD12352",
            registrationNo: "REG56796",
            fatherName: "",
            motherName: "",
            fatherQualification: "",
            motherQualification: "",
            fatherOccupation: "",
            motherOccupation: "",
            fatherAnnualIncome: "",
            motherAnnualIncome: "",
            gaurdianName: "",
            gaurdianOccupation: "",
            gaurdianQualification: "",
            caretakerName: "",
            caretakerOccupation: "",
            caretakerQualification: "",
            parentMobileNoA: "",
            parentMobileNoB: "",
            parentMobileNo3: "",
            parentEmailId1: "",
            parentEmailId2: "",
          },
      validationSchema: !parent
        ? studentValidationSchema
        : parentValidationSchema,
      onSubmit: (newStudent) => {
        if (!parent) {
          console.log("Student form Values are:", newStudent);
          setParent(true);
        } else {
          console.log("Parent form Values are:", newStudent);
        }
      },
    });

  if (!parent) {
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
                <div className="PassPortSizePhotoDiv">Photo</div>
                <Button
                  sx={{ margin: 2, textTransform: "none" }}
                  variant="contained"
                  color="primary"
                >
                  Upload
                </Button>
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
                        touched.initial && errors.initial
                          ? errors.initial
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
                    <MenuItem value={1}>A+</MenuItem>
                    <MenuItem value={2}>B+</MenuItem>
                    <MenuItem value={2}>B-</MenuItem>
                    <MenuItem value={2}>AB+</MenuItem>
                    <MenuItem value={2}>AB-</MenuItem>
                  </Select>
                </FormControl>
                <TextField
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
                />

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Religion
                  </InputLabel>
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
                      touched.religion && errors.religion
                        ? errors.religion
                        : null
                    }
                  >
                    <MenuItem value={1}>Hindu</MenuItem>
                    <MenuItem value={2}>Muslim</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Community
                  </InputLabel>
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
                    <MenuItem value={1}>BC</MenuItem>
                    <MenuItem value={2}>MBC</MenuItem>
                    <MenuItem value={2}>SC</MenuItem>
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
                      <MenuItem value="A">A</MenuItem>
                      <MenuItem value="B">B</MenuItem>
                      <MenuItem value="C">C</MenuItem>
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
                    <MenuItem value={1}>School</MenuItem>
                    <MenuItem value={2}>College</MenuItem>
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
                    <MenuItem value={1}>Kst School</MenuItem>
                    <MenuItem value={2}>Kst College</MenuItem>
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
                      touched.cityName && errors.cityName
                        ? errors.cityName
                        : null
                    }
                  >
                    <MenuItem value={1}>Tambaram</MenuItem>
                    <MenuItem value={2}>Chromepet</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">State</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    size="small"
                    label="stateName"
                    name="stateName"
                    value={values.stateName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.stateName && Boolean(errors.stateName)}
                    helperText={
                      touched.stateName && errors.stateName
                        ? errors.stateName
                        : null
                    }
                  >
                    <MenuItem value={1}>Chennai</MenuItem>
                    <MenuItem value={2}>Pondicherry</MenuItem>
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
                      value="true"
                      control={<Radio size="small" />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio size="small" />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
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
  } else {
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
                  error={
                    touched.parentEmailId1 && Boolean(errors.parentEmailId1)
                  }
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
                  name="parentMobileNoA"
                  value={values.parentMobileNoA}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.parentMobileNoA && Boolean(errors.parentMobileNoA)
                  }
                  helperText={
                    touched.parentMobileNoA && errors.parentMobileNoA
                      ? errors.parentMobileNoA
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
                  error={
                    touched.parentEmailId2 && Boolean(errors.parentEmailId2)
                  }
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
                  name="parentMobileNoB"
                  value={values.parentMobileNoB}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.parentMobileNoB && Boolean(errors.parentMobileNoB)
                  }
                  helperText={
                    touched.parentMobileNoB && errors.parentMobileNoB
                      ? errors.parentMobileNoB
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
  }
};

export default AddNewStudent;
