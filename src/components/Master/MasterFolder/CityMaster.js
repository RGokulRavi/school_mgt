import React, { useState } from "react";
import "../styles.css";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
  IconButton,
  Dialog,
  DialogActions,
  DialogTitle,
  CardActions,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import {
  CityListRows,
  CityListcolumns,
  CityMasterData,
  StateAndCitiesList,
  StateMasterData,
  formattedDate,
} from "../../../Global";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import * as Yup from "yup";
import DataTable from "../../Common/table";

const cityValidationSchema = Yup.object({
  id: Yup.number(),
  cityCode: Yup.string(),
  cityName: Yup.string(),
  adminitrationId: Yup.number(),
  createdBy: Yup.string(),
  createdAt: Yup.string(),
  updatedAt: Yup.string(),
  isActive: Yup.string(),
});

const CityMaster = () => {
  const [selectedState, setSelectedState] = React.useState();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        id: 2,
        cityCode: "",
        cityName: "",
        adminitrationId: 1,
        createdBy: "ADMIN",
        createdAt: Yup.date,
        updatedAt: Yup.date,
        isActive: "1",
      },
      validationSchema: cityValidationSchema,
      onSubmit: (data) => {
        console.log(data);
      },
    });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="StateMaster">
      <Card className="StateMasterDiv">
        <Typography variant="h4" sx={{ display: "flex", paddingLeft: 2 }}>
          Cities
        </Typography>
        <Divider />
        <div className="tableAndForm">
          <DataTable rows={CityListRows} columns={CityListcolumns} />
          <form onSubmit={handleSubmit}>
            <Card className="StateMasterCard">
              <Typography sx={{ fontWeight: "bold" }}>Add New City</Typography>
              <Divider />
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
              <TextField
                id="filled-basic"
                label="City Name"
                variant="filled"
                size="small"
                name="cityName"
                value={values.cityName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.cityName && errors.cityName}
                helperText={
                  touched.cityName && errors.cityName ? errors.cityName : null
                }
              />

              <CardActions>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={handleClose}
                  autoFocus
                >
                  Add
                </Button>
              </CardActions>
            </Card>
          </form>
        </div>
      </Card>
    </div>
  );
};

function EditCity({ data }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit city</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            label="city Code"
            value={data.cityCode}
            type={data.cityCode}
            fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            margin="dense"
            label="city Name"
            type={data.cityName}
            value={data.cityName}
            fullWidth
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CityMaster;

// function CityCard() {
//   return (
//     <div className="StateMastersCard">
//       {CityMasterData.map((data) => (
//         <Card sx={{ maxWidth: 275 }}>
//           <CardContent>
//             <Typography
//               sx={{ display: "flex", justifyContent: "center" }}
//               variant="h5"
//               component="div"
//             >
//               {data.cityName}
//               <Typography color="text.secondary">({data.cityCode})</Typography>

//               <EditCity data={data} />
//             </Typography>
//             <Divider />
//             <div className="StateDetails">
//               <Typography
//                 sx={{ textAlign: "left", display: "flex", paddingTop: 2 }}
//                 variant="body2"
//               >
//                 Created by :
//                 <Typography sx={{ paddingLeft: 2 }}>
//                   {data.createdBy}
//                 </Typography>
//               </Typography>
//               {/* <Typography
//               sx={{ textAlign: "left", display: "flex" }}
//               variant="body2"
//             >
//               Created Time Stamp :
//               <Typography sx={{ paddingLeft: 2 }}>
//                 {formattedDate}
//               </Typography>
//             </Typography> */}
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }
