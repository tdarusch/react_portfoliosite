import React from "react";
import { Box, Typography } from '@mui/material'
import { css, keyframes } from '@emotion/react'

const WordContainer = props => (
    <div
        css={{

        }}
    />
)

const Landing = ( colorTheme ) =>{
    const colors = colorTheme.colorTheme;
    return(
        <>
            <Box 
                sx={{
                    m: -1,
                    p: 0,
                    display: 'flex', 
                    flexDirection: 'row',
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
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        height: window.innerHeight,
                        width: window.innerWidth-243.5,
                        minHeight: 800,
                        minWidth: 1000,
                    }}
                >
                    <Typography sx={{border: '1px solid red', width: '100%', height: 40}}>react-spring to animate</Typography>
                </Box>
            </Box>
        </>
    );
}

export default Landing;