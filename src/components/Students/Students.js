import React from "react";
import DataTable from "../Common/table";
import "./styles.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Typography,
} from "@mui/material";
import { StudentsListColumns, StudentsListrows } from "../../Global";

const Students = () => {
  return (
    <div>
      <div className="search">
        <CardContent className="cardContants">
          <div className="cardHeader">
            <Typography variant="h5">All Students Data</Typography>
          </div>
          <div className="SearchFields">
            <TextField
              size="small"
              label="Search by Roll Number ..."
            ></TextField>
            <TextField size="small" label="Search by Name ..."></TextField>
            <TextField size="small" label="Search by Class ..."></TextField>
            <CardActions className="searchBtuton">
              <Button size="small" variant="contained">
                Search
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </div>
      <Card>
        <DataTable rows={StudentsListrows} columns={StudentsListColumns} />
      </Card>
    </div>
  );
};

export default Students;
