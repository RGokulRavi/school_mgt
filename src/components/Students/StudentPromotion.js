import React from "react";
import "./styles.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";

const StudentPromotion = () => {
  return (
    <div className="StudentPromotion">
      <Card className="studentPromotionCard">
        <Typography className="cardHeader" variant="h5">
          Student Promotion
        </Typography>
        <Divider />
        <CardContent className="StudentPromotionCardContentDiv">
          <TextField
            size="small"
            color="primary"
            label="Current Section *"
          ></TextField>
          <TextField size="small" label="Promotate Section *"></TextField>
          <TextField size="small" label="Promotion From Class *"></TextField>
          <TextField size="small" label="Promotion To Class *"></TextField>
        </CardContent>
        <CardActions>
          <div className="studentPromotionCardActionDiv">
            <Button variant="contained" sx={{ textTransform: "none" }}>
              Save
            </Button>
            <Button variant="contained" sx={{ textTransform: "none" }}>
              Reset
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default StudentPromotion;
