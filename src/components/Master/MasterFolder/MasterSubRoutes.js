import React from "react";
import { useParams } from 'react-router-dom';
import { MastersData } from "../../../Global";
import { Typography } from "@mui/material";

export default function MasterSubRoutes(){
    let { type,name } = useParams();
    return(
        <div className="MasterSubRoutesDiv" >
<Typography>{name}</Typography>
    <Typography>{type}</Typography>
        </div>
    
    )
    
}
