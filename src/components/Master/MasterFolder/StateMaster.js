import React from "react";
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
import { StateMasterData, formattedDate } from "../../../Global";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import * as Yup from "yup";

const stateValidationSchema = Yup.object({
  id: Yup.number().required(),
  stateCode: Yup.string().required,
  stateName: Yup.string().required,
  adminitrationId: Yup.number().required,
  createdBy: Yup.string().required,
  createdAt: Yup.string().required,
  updatedAt: Yup.string().required,
  isActive: Yup.string().required,
});

const StateMaster = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        id: 2,
        stateCode: "",
        stateName: "",
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

  const EditState = () => {
    <div className="AddButtonDiv">
      setOpen(true);
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Add State"}</DialogTitle>
        <Divider />
        <form onSubmit={handleSubmit}>
          <div className="formDiv">
            <TextField
              id="filled-basic"
              label="State Name"
              variant="filled"
              size="small"
              name="stateName"
              value={values.stateName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.stateName && errors.stateName}
              helperText={
                touched.stateName && errors.stateName ? errors.stateName : null
              }
            />
            <TextField
              id="filled-basic"
              label="State Code"
              variant="filled"
              size="small"
              name="stateCode"
              value={values.stateCode}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.stateCode && errors.stateCode}
              helperText={
                touched.stateCode && errors.stateCode ? errors.stateCode : null
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
    </div>;
  };

  return (
    <div className="StateMaster">
      <div className="StateMastersCard">
        {StateMasterData.map((data) => (
          <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ display: "flex", justifyContent: "center" }}
                variant="h5"
                component="div"
              >
                {data.stateName}
                <Typography color="text.secondary">
                  ({data.stateCode})
                </Typography>
                <IconButton onClick={() => <EditState />}>
                  <EditIcon />
                </IconButton>
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
          <DialogTitle id="responsive-dialog-title">{"Add State"}</DialogTitle>
          <Divider />
          <form onSubmit={handleSubmit}>
            <div className="formDiv">
              <TextField
                id="filled-basic"
                label="State Name"
                variant="filled"
                size="small"
                name="stateName"
                value={values.stateName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.stateName && errors.stateName}
                helperText={
                  touched.stateName && errors.stateName
                    ? errors.stateName
                    : null
                }
              />
              <TextField
                id="filled-basic"
                label="State Code"
                variant="filled"
                size="small"
                name="stateCode"
                value={values.stateCode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.stateCode && errors.stateCode}
                helperText={
                  touched.stateCode && errors.stateCode
                    ? errors.stateCode
                    : null
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

export default StateMaster;
