import React from "react";
import { Box } from "@mui/material";

const RootBox = ({tc, bgc}) => {
    return(
        <Box 
            sx={{
                m: -1,
                p: 0,
                display: 'flex', 
                justifyContent: 'center',
                backgroundColor: bgc, 
                color: tc, 
                userSelect: 'none', 
                width: '100vw',
                height: window.innerHeight,
                minHeight: 800,
                minWidth: 1000
            }}
        />
    );
};

export default RootBox;