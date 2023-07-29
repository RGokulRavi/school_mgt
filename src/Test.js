// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// const steps = ["Student Details", "Parants Details", "Banks and Ids"];

// const Test = () => {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? // It's the last step, but not all steps have been completed,
//           // find the first step that has been completed
//           steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//     setActiveStep(newActiveStep);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const handleComplete = () => {
//     const newCompleted = completed;
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper nonLinear activeStep={activeStep}>
//         {steps.map((label, index) => (
//           <Step key={label} completed={completed[index]}>
//             <StepButton color="inherit" onClick={handleStep(index)}>
//               {label}
//             </StepButton>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {allStepsCompleted() ? (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Box sx={{ flex: "1 1 auto" }} />
//               <Button onClick={handleReset}>Reset</Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: "1 1 auto" }} />
//               <Button onClick={handleNext} sx={{ mr: 1 }}>
//                 Next
//               </Button>
//               {activeStep !== steps.length &&
//                 (completed[activeStep] ? (
//                   <Typography
//                     variant="caption"
//                     sx={{ display: "inline-block" }}
//                   >
//                     Step {activeStep + 1} already completed
//                   </Typography>
//                 ) : (
//                   <Button onClick={handleComplete}>
//                     {completedSteps() === totalSteps() - 1
//                       ? "Finish"
//                       : "Complete Step"}
//                   </Button>
//                 ))}
//             </Box>
//           </React.Fragment>
//         )}
//       </div>
//     </Box>
//   );
// };

// export default Test;

// <TextField
//             id="filled-basic"
//             label="First Name"
//             variant="outlined"
//             size="small"
//             firstName="firstName"
//             value={values.firstName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={touched.firstName && errors.firstName}
//             helperText={
//               touched.firstName && errors.firstName ? errors.firstName : null
//             }
//           />
//           <TextField
//             id="filled-basic"
//             label="Middle Name"
//             variant="outlined"
//             size="small"
//             name="middleName"
//             value={values.middleName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={touched.middleName && errors.middleName}
//             helperText={
//               touched.middleName && errors.middleName ? errors.middleName : null
//             }
//           />
//           <TextField
//             id="filled-basic"
//             label="Last name"
//             variant="outlined"
//             size="small"
//             name="lastName"
//             value={values.lastName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={touched.lastName && errors.lastName}
//             helperText={
//               touched.lastName && errors.lastName ? errors.lastName : null
//             }
//           />
//           <TextField
//             id="filled-basic"
//             label="Class Name"
//             variant="outlined"
//             size="small"
//             name="className"
//             value={values.className}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={touched.className && errors.className}
//             helperText={
//               touched.className && errors.className ? errors.className : null
//             }
//           />
//           <TextField
//             id="filled-basic"
//             label="Section Name"
//             variant="outlined"
//             size="small"
//             name="sectionName"
//             value={values.sectionName}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={touched.sectionName && errors.sectionName}
//             helperText={
//               touched.sectionName && errors.sectionName
//                 ? errors.sectionName
//                 : null
//             }
//           />
//           <TextField
//             id="filled-basic"
//             label="Gender"
//             variant="outlined"
//             size="small"
//             name="className"
//             value={values.className}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             error={touched.className && errors.className}
//             helperText={
//               touched.className && errors.className ? errors.className : null
//             }
//           />
// import React from "react";
// import { TextField, Button } from "@mui/material";

// const MyForm = () => {
//   const fields = ["firstName", "lastName", "email"];

//   const handleChange = (event) => {
//     // Handle input changes
//     // You can update the form state or do other logic here
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//     // You can access the form values and perform any desired logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {fields.map((field) => (
//         <TextField
//           key={field}
//           fullWidth
//           id={field}
//           name={field}
//           label={field.charAt(0).toUpperCase() + field.slice(1)}
//           onChange={handleChange}
//         />
//       ))}
//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default MyForm;

// <Radio
//   checked={selectedValue === "a"}
//   onChange={handleChange}
//   value="a"
//   name="radio-buttons"
//   inputProps={{ "aria-label": "A" }}
// />;

// import * as React from "react";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

// export default function RadioButtonsGroup() {
//   return (
//     <FormControl>
//       <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue="female"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//         <FormControlLabel value="other" control={<Radio />} label="Other" />
//       </RadioGroup>
//     </FormControl>
//   );
// }AdminPanelSettingsIcon

// const fieldData = [
//   { type: "TextField", name: "initial" },
//   { type: "TextField", name: "firstName" },
//   { type: "TextField", name: "middleName" },
//   { type: "TextField", name: "lastName" },
//   { type: "select", name: "religion", values: ["Hindu", "Muslims"] },
//   { type: "TextField", name: "address1" },
//   { type: "TextField", name: "address2" },
//   { type: "TextField", name: "pincode" },
//   { type: "TextField", name: "mobile" },
//   { type: "TextField", name: "nationality" },
//   { type: "TextField", name: "emailId" },
//   { type: "TextField", name: "dateOfBirth" },
//   { type: "TextField", name: "photoUrl" },
//   { type: "TextField", name: "fatherName" },
//   { type: "TextField", name: "motherName" },
// ];

// const SelectData = [
//   { type: "select", name: "className" },
//   { type: "select", name: "stateName" },
//   { type: "select", name: "Thanjavur" },
//   { type: "select", name: "sectionName" },
//   { type: "select", name: "religion", values: ["Hindu", "Muslims"] },
//   { type: "select", name: "community" },
//   { type: "select", name: "bloodGroup" },
//   { type: "select", name: "fatherQualification" },
//   { type: "select", name: "motherQualification" },
// ];
// const radioData = [{ type: "radio", name: "gender" }];
// import React from "react";
// import "./teststyle.css";
// import { StateMasterData } from "./Global";

// const Test = () => {
//   return (
//     <div className="Test">
//       {StateMasterData.map((data) => {
//         console.log(data);
//       })}
//     </div>
//   );
// };

// function CardFunction({ data }) {
//   return <div className="Card">"hi"</div>;
// }

// export default Test;

// const renderFields = () => {
//   return inputFieldArr.map((field) => (
//     <TextField
//       key={field}
//       fullWidth
//       id={field}
//       sx={{ marginBottom: 1 }}
//       size="small"
//       name={field}
//       label={field.charAt(0).toUpperCase() + field.slice(1)}
//       value={values[field]}
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={touched[field] && Boolean(errors[field])}
//       helperText={touched[field] && errors[field]}
//     />
//   ));
// };

// {
/* {studentRequiredFields.map((field) => {
              if (field.type === "TextField") {
                return (
                  <TextField
                    key={field.typeName}
                    fullWidth
                    id={field.typeName}
                    sx={{ marginBottom: 1 }}
                    size="small"
                    name={field.typeName}
                    label={
                      field.typeName.charAt(0).toUpperCase() +
                      field.typeName.slice(1)
                    }
                    value={values[field.typeName]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched[field.typeName] && Boolean(errors[field.typeName])
                    }
                    helperText={
                      touched[field.typeName] && errors[field.typeName]
                    }
                  />
                );
              } else if (field.type === "Radio") {
                return (
                  <FormControl component="fieldset">
                    <InputLabel>{field.typeName}</InputLabel>
                    <RadioGroup
                      key={field.typeName}
                      id={field.typeName}
                      name={field.typeName}
                      value={values[field.typeName]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      {field.radioValues.map((option) => (
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
              } else if (field.type === "Select") {
                return (
                  <FormControl fullWidth>
                    <InputLabel htmlFor={field.dtypeName}>
                      {field.typeName.charAt(0).toUpperCase() +
                        field.typeName.slice(1)}
                    </InputLabel>
                    <Select
                      label={
                        field.typeName.charAt(0).toUpperCase() +
                        field.typeName.slice(1)
                      }
                      id={field.typeName}
                      name={field.typeName}
                      value={values[field.typeName]}
                      onChange={handleChange}
                    >
                      {field.selectValues.map((value) => (
                        <MenuItem key={value} value={value}>
                          {value}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                );
              }
            })} */
// }

// admissionNo: Yup.string().required(),
// registrationNo: Yup.string().required(),
// initial: Yup.string().required(),
// firstName: Yup.string().required("First Name is required").min("2"),
// middleName: Yup.string(),
// lastName: Yup.string(),
// className: Yup.string().required(),
// sectionName: Yup.string(),
// gender: Yup.string().required(),
// administrationType: Yup.string(),
// administrationName: Yup.string(),
// address1: Yup.string().required(),
// address2: Yup.string().required(),
// pincode: Yup.string().required(),
// stateName: Yup.string().required(),
// cityName: Yup.string().required(),
// nationality: Yup.string().required(),
// mobile: Yup.number().required().min(10),
// emailId: Yup.string().email("Invalid email").required("Email is required"),
// dateOfBirth: Yup.string().required(),
// religion: Yup.string(),
// community: Yup.string(),
// bloodGroup: Yup.string().required(),
// photoUrl: Yup.string().required(),
// fatherName: Yup.string().required(),
// motherName: Yup.string().required(),
// fatherQualification: Yup.string().required(),
// admissionNo: Yup.string().required(),
// fatherOccupation: Yup.string().required(),
// motherOccupation: Yup.string().required(),
// fatherAnnualIncome: Yup.string().required(),
// motherAnnualIncome: Yup.string().required(),
// gaurdianName: Yup.string().required(),
// gaurdianOccupation: Yup.string().required(),
// gaurdianQualification: Yup.string().required(),
// caretakerName: Yup.string().required(),
// caretakerOccupation: Yup.string().required(),
// caretakerQualification: Yup.string().required(),
// parentMobileNoA: Yup.string().required(),
// parentMobileNoB: Yup.string().required(),
// parentMobileNo3: Yup.string().required(),
// parentEmailId1: Yup.string().required(),
// parentEmailId2: Yup.string(),
// adharcardNo: Yup.string().required(),
// pancardNo: Yup.string().required(),
// bankName: Yup.string().required(),
// bankBranch: Yup.string().required(),
// accountNo: Yup.string().required(),
// ifscNo: Yup.string().required(),
// certificateProvided: Yup.string().required(),
// administrationId: Yup.string().required(),
