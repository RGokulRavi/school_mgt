import React from "react";
import "./styles.css";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

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

  const fieldData = [
    { type: "TextField", typeName: "initial" },
    { type: "TextField", typeName: "firstName" },
    { type: "TextField", typeName: "middleName" },
    { type: "TextField", typeName: "lastName" },
    { type: "select", typeName: "religion", values: ["Hindu", "Muslims"] },
    { type: "TextField", typeName: "address1" },
    { type: "TextField", typeName: "address2" },
    { type: "TextField", typeName: "pincode" },
    { type: "TextField", typeName: "mobile" },
    { type: "TextField", typeName: "nationality" },
    { type: "TextField", typeName: "emailId" },
    { type: "TextField", typeName: "dateOfBirth" },
    { type: "TextField", typeName: "photoUrl" },
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

  // const RenderField = (field) => {
  //   const { type, typeName, values } = field;
  // switch (type) {
  //   case "TextField":
  //     return (
  //       <TextField
  //         key={name}
  //         fullWidth
  //         id={name}
  //         sx={{ marginBottom: 1 }}
  //         size="small"
  //         name={name}
  //         label={name.charAt(0).toUpperCase() + name.slice(1)}
  //         value={values[name]}
  //         onChange={handleChange}
  //         onBlur={handleBlur}
  //         error={touched[name] && Boolean(errors[name])}
  //         helperText={touched[name] && errors[name]}
  //       />
  //     );
  // case "select":
  //   return (
  //     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
  //       <InputLabel>{name}</InputLabel>
  //       <Select
  //         labelId="demo-select-small-label"
  //         id={name}
  //         value={name}
  //         label={name}
  //         onChange={handleChange}
  //       >
  //         <MenuItem value="">
  //           <em>None</em>
  //         </MenuItem>
  //         values.map{(data) => <MenuItem value={data}>Ten</MenuItem>}
  //         {/* <MenuItem value={10}>Ten</MenuItem>
  //         <MenuItem value={20}>Twenty</MenuItem>
  //         <MenuItem value={30}>Thirty</MenuItem> */}
  //       </Select>
  //     </FormControl>
  //   );
  // default:
  //   return null;
  //   switch (type) {
  //     case "TextField":
  //       return (
  //         <TextField
  //           key={typeName}
  //           fullWidth
  //           id={typeName}
  //           sx={{ marginBottom: 1 }}
  //           size="small"
  //           name={typeName}
  //           label={typeName.charAt(0).toUpperCase() + typeName.slice(1)}
  //           value={values[typeName]}
  //           onChange={handleChange}
  //           onBlur={handleBlur}
  //           error={touched[typeName] && Boolean(errors[typeName])}
  //           helperText={touched[typeName] && errors[typeName]}
  //         />
  //       );
  //     case "select":
  //       return (
  //         <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
  //           <InputLabel>{typeName}</InputLabel>
  //           <Select
  //             labelId="demo-select-small-label"
  //             id={typeName}
  //             value={values[typeName]}
  //             label={typeName}
  //             onChange={handleChange}
  //           >
  //             <MenuItem value="">
  //               <em>None</em>
  //             </MenuItem>
  //             values.map
  //             {(data) => <MenuItem value={values.data}>{data}</MenuItem>}
  //             {/* <MenuItem value={10}>Ten</MenuItem>
  //           <MenuItem value={20}>Twenty</MenuItem>
  //           <MenuItem value={30}>Thirty</MenuItem> */}
  //           </Select>
  //         </FormControl>
  //       );
  //   }
  // };

  const renderTextField = () => {
    return (
      <TextField
        key={typeName}
        fullWidth
        id={typeName}
        sx={{ marginBottom: 1 }}
        size="small"
        name={typeName}
        label={capitalizeFirstLetter(typeName)}
        value={values[typeName]}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched[typeName] && Boolean(errors[typeName])}
        helperText={touched[typeName] && errors[typeName]}
      />
    );
  };

  const renderRadioGroup = () => {
    return (
      <FormControl component="fieldset">
        <InputLabel>{capitalizeFirstLetter(typeName)}</InputLabel>
        <RadioGroup
          key={typeName}
          id={typeName}
          name={typeName}
          value={values[typeName]}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {values.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    );
  };

  const renderSelect = () => {
    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>{capitalizeFirstLetter(typeName)}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id={typeName}
          value={values[typeName]}
          label={capitalizeFirstLetter(typeName)}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {values.map((data) => (
            <MenuItem key={data} value={data}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <div className="StudentRegistration">
      <Typography sx={{ fontWeight: "bold" }} variant="h6">
        Student Detail
      </Typography>
      <div className="addStudentFormDiv">
        <form onSubmit={handleSubmit} className="addStudentForm">
          {/* {fieldData.map((field) => RenderField(field))} */}
          {typeName === "TextField" && renderTextField()}
          {typeName === "Radio" && renderRadioGroup()}
          {typeName === "Select" && renderSelect()}
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddNewStudent;
