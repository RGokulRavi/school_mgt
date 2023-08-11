import React, { useState } from "react";
import "../styles.css";
import {
  CityListRows,
  CityListcolumns,
  MonthList,
  SchoolSetupListRows,
  SchoolSetupListcolumns,
  StateAndCitiesList,
} from "../../../Global";
import DataTable from "../../Common/table";
import {
  TextField,
  Button,
  Typography,
  Divider,
  IconButton,
  Dialog,
  DialogActions,
  DialogTitle,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import * as Yup from "yup";

const SchoolSetup = () => {
  return (
    <div className="StateMaster">
      <div className="Head">
        <Typography variant="h4" sx={{ display: "flex", paddingLeft: 3 }}>
          School Setup
        </Typography>
        <Divider />
      </div>
      <DataTable rows={SchoolSetupListRows} columns={SchoolSetupListcolumns} />
      <AddButton />
    </div>
  );
};

const SchoolSetupValidationSchema = Yup.object({
  id: Yup.string(),
  name: Yup.string(),
  phone: Yup.string(),
  address1: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  pincode: Yup.string(),
  administrationId: Yup.string(),
  academicYear: Yup.string(),
  createdBy: Yup.string(),
  createdAt: Yup.string(),
  updatedAt: Yup.string(),
  isActive: Yup.string(),
});

function AddButton() {
  const [open, setOpen] = React.useState(false);
  const [selectedState, setSelectedState] = React.useState();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        id: "",
        name: "",
        phone: "",
        address1: "",
        city: "",
        state: "",
        pincode: "",
        administrationId: "",
        academicYear: "",
        createdBy: "",
        createdAt: "",
        updatedAt: "",
        isActive: "",
      },
      ValidationSchema: SchoolSetupValidationSchema,
      onSubmit: (data) => {
        console.log("School form Values are:", data);
      },
    });

  return (
    <div className="AddButtonDiv">
      <IconButton onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog
        className="SchoolSetupDialog"
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Add School</DialogTitle>
        <Divider />
        <form onSubmit={handleSubmit}>
          <div className="formDiv">
            <TextField
              id="filled-basic"
              label="School Name"
              variant="filled"
              size="small"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
              helperText={touched.name && errors.name ? errors.name : null}
            />
            <TextField
              id="filled-basic"
              label="Address"
              variant="filled"
              size="small"
              name="address1"
              value={values.address1}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address1 && errors.address1}
              helperText={
                touched.address1 && errors.address1 ? errors.address1 : null
              }
            />
            <TextField
              id="filled-basic"
              label="Phone Number"
              variant="filled"
              size="small"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && errors.phone}
              helperText={touched.phone && errors.phone ? errors.phone : null}
            />
            <div className="twoInput">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  variant="filled"
                  label="state"
                  name="state"
                  value={values.state}
                  // onChange={handleChange}
                  onChange={(event) => {
                    handleChange(event);
                    setSelectedState(event.target.value);
                  }}
                  onBlur={handleBlur}
                  error={touched.state && Boolean(errors.state)}
                  helperText={
                    touched.state && errors.state ? errors.state : null
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
                  label="city"
                  name="city"
                  variant="filled"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city ? errors.city : null}
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
            </div>
            <div className="twoInput">
              <TextField
                id="filled-basic"
                label="Pin Code"
                variant="filled"
                size="small"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.pincode && errors.pincode}
                helperText={
                  touched.pincode && errors.pincode ? errors.pincode : null
                }
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Academic Year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  label="academicYear"
                  name="academicYear"
                  variant="filled"
                  value={values.academicYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.academicYear && Boolean(errors.academicYear)}
                  helperText={
                    touched.academicYear && errors.academicYear
                      ? errors.academicYear
                      : null
                  }
                >
                  {MonthList.map((data) => (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <DialogActions>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              onClick={handleClose}
              autoFocus
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default SchoolSetup;
