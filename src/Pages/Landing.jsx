import React from "react";
import { Box } from '@mui/material'

const Landing = ( colorTheme ) =>{
    const colors = colorTheme.colorTheme;
    return(
        <>
            <Box 
                sx={{
                    m: -1,
                    p: 0,
                    display: 'flex', 
                    justifyContent: 'center',
                    backgroundColor: colors.bgc, 
                    color: colors.tc, 
                    userSelect: 'none', 
                    width: '100vw',
                    height: window.innerHeight,
                    minHeight: 800,
                    minWidth: 1000
                }}
            >

            </Box>
        </>
    );
}

export default Landing;