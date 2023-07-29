import React from "react";
import { MastersData } from "../../Global";
import "./styles.css";
// import { Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Master = () => {
  const uniqueTypes = [...new Set(MastersData.map((e) => e.type))];
  return (
    <div className="Master">
      {uniqueTypes.map((e) => (
        <Accordion sx={{ minWidth: 275, cursor: "pointer" }}>
          <AccordionSummary>
            <Typography variant="body2">{e}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{e}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Master;
