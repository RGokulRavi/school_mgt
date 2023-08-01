import React, { useState } from "react";
import { MastersData } from "../../Global";
import "./styles.css";
// import { Card, CardContent, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MasterSubRoutes from "./MasterFolder/MasterSubRoutes";
import Body from "../Body/Body";
import MiniDrawer from "../DashBoard/minidrawer";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Master = () => {
  const [mastersName, setMastersName] = useState("initial");
  const uniqueTypes = [...new Set(MastersData.map((e) => e.type))];
  return (
    <div className="Master">
      {uniqueTypes.map((e) => (
        <Accordion
          sx={{
            minWidth: 275,
            cursor: "pointer",
            background: "#16062a",
            color: "white",
            marginBottom: 1,
          }}
        >
          <AccordionSummary>
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold" }}
              variant="body2"
            >
              {e}
            </Typography>
          </AccordionSummary>
          {MastersData.map((data) =>
            data.type === e ? (
              <AccordionDetails
                sx={{
                  textAlign: "left",
                  paddingLeft: 10,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    textTransform: "none",
                    height: 10,
                  }}
                  variant="body2"
                  // onClick={() =>
                  //   navigate(`/${e}/${data.name.split(" ").join("")}`)
                  // }
                  onClick={() => {
                    setMastersName(data.name);
                  }}
                >
                  🔸{data.name}
                </Typography>
              </AccordionDetails>
            ) : null
          )}
        </Accordion>
      ))}
      {mastersName === "initial" ? null : <MiniDrawer data={mastersName} />}
    </div>
  );
};

export default Master;
