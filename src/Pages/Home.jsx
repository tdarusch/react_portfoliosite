import React from "react";
import { Button, Box, Typography, Divider } from "@mui/material";

const Home = ( colorTheme ) => {
    const colors = colorTheme.colorTheme
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
                <Box
                    sx={{
                        width: '85vw',
                        backgroundColor: colors.c3,
                        display: 'flex',
                        justifyContent: 'left',
                        flexDirection: 'column',
                        p: 2,
                    }}
                >
                    <Typography variant="h5">
                        <b>Welcome To My Portfolio</b>
                    </Typography>
                    <Typography variant="subtitle1">
                        This site serves as a portfolio of past & ongoing work, as well as a personal overview of myself
                    </Typography>
                    <Divider/>
                </Box>
            </Box>
        </>
    );
}

export default Home;