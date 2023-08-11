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
  CardHeader,
} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import {
  StateListRows,
  StateListcolumns,
  StateMasterData,
  StudentsListColumns,
  StudentsListrows,
  formattedDate,
} from "../../../Global";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useFormik } from "formik";
import * as Yup from "yup";
import DataTable from "../../Common/table";

const stateValidationSchema = Yup.object({
  id: Yup.number(),
  stateCode: Yup.string(),
  stateName: Yup.string(),
  adminitrationId: Yup.number(),
  createdBy: Yup.string(),
  createdAt: Yup.string(),
  updatedAt: Yup.string(),
  isActive: Yup.string(),
});

const StateMaster = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { handleSubmit, values, handleChange, handleBlur, errors, touched } =
    useFormik({
      initialValues: {
        id: 1,
        stateCode: "",
        stateName: "",
        adminitrationId: 1,
        createdBy: "ADMIN",
        createdAt: Yup.date,
        updatedAt: Yup.date,
        isActive: "1",
      },
      validationSchema: stateValidationSchema,
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
        <Typography sx={{ display: "flex", paddingLeft: 2 }} variant="h4">
          States
        </Typography>
        <Divider />
        <div className="tableAndForm">
          <DataTable rows={StateListRows} columns={StateListcolumns} />
          <form onSubmit={handleSubmit}>
            <Card className="StateMasterCard">
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

function EditState({ data }) {
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
        <DialogTitle>Edit State</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            // margin="dense"
            label="State Code"
            value={data.stateCode}
            type={data.stateCode}
            // fullWidth
            variant="filled"
          />
          <TextField
            autoFocus
            // margin="dense"
            label="State Name"
            type={data.stateName}
            value={data.stateName}
            // fullWidth
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

export default StateMaster;

// function CardData() {
//   return (
//     <div className="StateMastersCard">
//       {StateMasterData.map((data) => (
//         <Card sx={{ maxWidth: 275 }}>
//           <CardContent>
//             <Typography
//               sx={{ display: "flex", justifyContent: "center" }}
//               variant="h5"
//               component="div"
//             >
//               {data.stateName}
//               <Typography color="text.secondary">({data.stateCode})</Typography>

//               <EditState data={data} />
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
//           sx={{ textAlign: "left", display: "flex" }}
//           variant="body2"
//         >
//           Created Time Stamp :
//           <Typography sx={{ paddingLeft: 2 }}>
//             {formattedDate}
//           </Typography>
//         </Typography> */}
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }
