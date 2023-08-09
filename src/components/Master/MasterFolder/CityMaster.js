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
} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import {
  CityMasterData,
  StateMasterData,
  formattedDate,
} from "../../../Global";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import * as Yup from "yup";

const cityValidationSchema = Yup.object({
  id: Yup.number().required(),
  cityCode: Yup.string().required,
  cityName: Yup.string().required,
  adminitrationId: Yup.number().required,
  createdBy: Yup.string().required,
  createdAt: Yup.string().required,
  updatedAt: Yup.string().required,
  isActive: Yup.string().required,
});

const CityMaster = () => {
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
    });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="StateMaster">
      <div className="StateMastersCard">
        {CityMasterData.map((data) => (
          <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ display: "flex", justifyContent: "center" }}
                variant="h5"
                component="div"
              >
                {data.cityName}
                <Typography color="text.secondary">
                  ({data.cityCode})
                </Typography>

                <EditCity data={data} />
              </Typography>
              <Divider />
              <div className="StateDetails">
                <Typography
                  sx={{ textAlign: "left", display: "flex", paddingTop: 2 }}
                  variant="body2"
                >
                  Created by :
                  <Typography sx={{ paddingLeft: 2 }}>
                    {data.createdBy}
                  </Typography>
                </Typography>
                {/* <Typography
                  sx={{ textAlign: "left", display: "flex" }}
                  variant="body2"
                >
                  Created Time Stamp :
                  <Typography sx={{ paddingLeft: 2 }}>
                    {formattedDate}
                  </Typography>
                </Typography> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="AddButtonDiv">
        <IconButton onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Add City"}</DialogTitle>
          <Divider />
          <form onSubmit={handleSubmit}>
            <div className="formDiv">
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
              <TextField
                id="filled-basic"
                label="City Code"
                variant="filled"
                size="small"
                name="cityCode"
                value={values.cityCode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.cityCode && errors.cityCode}
                helperText={
                  touched.cityCode && errors.cityCode ? errors.cityCode : null
                }
              />
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
