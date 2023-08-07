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

const Students = () => {
  return (
    <div className="Card">
      <Card>
        <CardHeader>
          <Typography>Students</Typography>
        </CardHeader>
        <div className="search">
          <CardContent className="cardContants">
            <div className="cardHeader">
              <Typography variant="h5">Students</Typography>
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

        <div className="dataTable">
          <DataTable />
        </div>
      </Card>
    </div>
  );
};

export default Students;
