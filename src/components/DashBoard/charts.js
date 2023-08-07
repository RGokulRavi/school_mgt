import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { pieChartData } from "../../Global";
import "./styles.css";
import { Grid } from "@mui/material";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Charts = () => {
  const options = {
    // exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "School",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        // showInLegend: "true",
        // legendText: "{label}",
        indexLabelFontSize: 16,
        // indexLabel: "{y}%",
        dataPoints: pieChartData,
      },
    ],
  };
  const options1 = {
    animationEnabled: true,
    title: {
      text: "Monthly Admission - 2023",
      padding: "50px",
    },
    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      title: "Admission (in USD)",
      prefix: "$",
    },
    data: [
      {
        yValueFormatString: "$#,###",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2017, 0), y: 25060 },
          { x: new Date(2017, 1), y: 27980 },
          { x: new Date(2017, 2), y: 42800 },
          { x: new Date(2017, 3), y: 32400 },
          { x: new Date(2017, 4), y: 35260 },
          { x: new Date(2017, 5), y: 33900 },
          { x: new Date(2017, 6), y: 40000 },
          { x: new Date(2017, 7), y: 52500 },
          { x: new Date(2017, 8), y: 32300 },
          { x: new Date(2017, 9), y: 42000 },
          { x: new Date(2017, 10), y: 37160 },
          { x: new Date(2017, 11), y: 38400 },
        ],
      },
    ],
  };
  const chartContainerStyle = {
    margin: "50px",
    padding: "20px",
    minheight: "450px", // Set the height here
    width: "600px", // Set the width here, you can also use specific values like "500px"
    border: "1px solid #ccc", // Set the border properties here
    borderRadius: "5px", // You can add border-radius for rounded corners if desired
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // You can add box shadow for a more prominent look
  };

  return (
    // <div className="chartDiv">
    //   <div style={chartContainerStyle}>
    //     <CanvasJSChart options={options1} />
    //   </div>
    //   <div style={chartContainerStyle}>
    //     {/* <div style={{height:"500px",width:"500px"}}> */}
    //     <CanvasJSChart options={options} />
    //     {/* </div> */}
    //   </div>
    // </div>

    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <div className="chartDiv">
          {/* Adjust the chart container style to make it responsive */}
          <div style={{ width: "100%", height: "300px" }}>
            <CanvasJSChart options={options1} />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className="chartDiv">
          {/* Adjust the chart container style to make it responsive */}
          <div style={{ width: "100%", height: "300px" }}>
            <CanvasJSChart options={options} />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Charts;
