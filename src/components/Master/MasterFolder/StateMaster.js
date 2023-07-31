import React, { useState } from "react";
import {
  Select,
  MenuItem,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
} from "@mui/material";
import { StateMasterData } from "../../../Global";

const StateMaster = () => {
  const initialOptions = StateMasterData.map((e) => e.stateName);
  const [options, setOptions] = useState(initialOptions);

  const [newOption, setNewOption] = useState("");

  const handleNewOptionChange = (event) => {
    setNewOption(event.target.value);
  };

  const handleAddOption = () => {
    if (newOption.trim() === "") return; // Avoid adding empty options
    setOptions((prevOptions) => [...prevOptions, newOption]);
    setNewOption("");
  };

  return (
    <div className="StateMaster">
      <div className="StateMasterSearchDiv">
        <Select value="" onChange={() => {}}>
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <TextField
          value={newOption}
          onChange={handleNewOptionChange}
          label="New Option"
          variant="outlined"
        />
        <Button variant="contained" onClick={handleAddOption}>
          Add
        </Button>
      </div>
      <div className="StateMastersCard">
        {StateMasterData.map((data) => (
          <Card sx={{ maxWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {data.id}
              </Typography>
              <Typography variant="h5" component="div">
                {data.stateName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.stateCode}
              </Typography>
              <Typography variant="body2">
                Created by:{data.createdBy}
                <br />
                Created Time Stamp:{data.createdAt}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StateMaster;
