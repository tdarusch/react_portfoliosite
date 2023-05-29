import React from "react";
import { Button, Box, Typography, Divider } from "@mui/material";
import DisplayCard from "../Components/DisplayCard";
import MemoryIcon from '@mui/icons-material/Memory';

const Home = ( colorTheme ) => {
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
                <Box
                    sx={{
                        width: '96.5%',
                        backgroundColor: colors.c3,
                        display: 'flex',
                        justifyContent: 'left',
                        flexDirection: 'column',
                        p: 2,
                    }}
                >  
                    <Box
                        sx={{
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
                        <Typography variant="subtitle1" sx={{paddingBottom: 1.5}}>
                            This site serves as a portfolio of past & ongoing work, as well as a personal overview of myself
                        </Typography>
                        <Divider/>
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: colors.c3,
                            display: 'flex',
                            justifyContent: 'top',
                            flexDirection: 'column',
                            px: 2,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: colors.c3,
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                p: 2,
                            }}
                        >
                            <Typography variant="h5">
                                <b>Research</b>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: colors.c3,
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                p: 2,
                            }}
                        >
                            <DisplayCard
                                title="2022 CURS Symposium"
                                subtitle="Symposium presentation on my summer research"
                                bgc={colors.c4}
                                tc={colors.tc}
                                tc2={colors.tc2}
                                link="projects/cellsimulations"
                                image='https://media.licdn.com/dms/image/C5622AQEDVwH7GICK0g/feedshare-shrink_2048_1536/0/1658674994732?e=1687996800&v=beta&t=34-cXa0T5hkXFa-Xp0cVIMkDhZJ3SAY1tL_OKNvVwt0'
                                desc="To conclude the Augusta University CURS Summer Scholars Program, students were required to give an oral poster presentation that reflected their work that summer. My work, conducted under Dr. Jonathan Dawson and Dr. Abdul Malmi-Kakkada, involved computationally modelling various cell behaviors using CHASTE"
                                github='https://github.com/tdarusch/2022_WoundSimulations'
                                icon3={<MemoryIcon/>}
                                icon3tip='CHASTE'
                                icon3link='https://www.cs.ox.ac.uk/chaste/'
                            />

                            <DisplayCard
                                title="2023 URFA Presentation"
                                subtitle="Oral presentation at the annual AU Undergrad. Research & Arts Conference"
                                bgc={colors.c4}
                                tc={colors.tc}
                                tc2={colors.tc2}
                                link="https://augedu-my.sharepoint.com/:p:/g/personal/trusch_augusta_edu/EVU-QF6qHsVNi_592uQZ5vcBhHFcdttVhV8pRpOxV6rr8Q?e=SQfxPr"
                                image='https://i.gyazo.com/58a57d52f19cf23fe43e26598d29246b.png'
                                desc="My presentation at the 2023 URFA conference was a continuation of the work started during the 2022 SSP. My talk was on 'Simulating Wound Healing With Variable Intercellular Contact Adhesion', and it was constructed under the mentorship of Dr. Jonathan Dawson and Dr. Abdul Malmi-Kakkada"
                                github='https://github.com/tdarusch/2022_WoundSimulations'
                                icon3={<MemoryIcon/>}
                                icon3tip='CHASTE'
                                icon3link='https://www.cs.ox.ac.uk/chaste/'
                            />
                            <DisplayCard
                                title="2023 CURS Symposium"
                                subtitle="Upcoming symposium presentation on my summer research"
                                bgc={colors.c4}
                                tc={colors.tc}
                                tc2={colors.tc2}
                                link="https://www.biorxiv.org/content/10.1101/2022.02.25.481961v1.full"
                                image='https://www.biorxiv.org/content/biorxiv/early/2022/02/25/2022.02.25.481961/F1.large.jpg'
                                desc="Similar to my summer 2022 presentation, this upcoming symposium will encompass my continuing work with Dr. Jonathan Dawson and Dr. Abdul Malmi Kakkada. Our work still utilizes CHASTE for simulating cell behaviors, but rather than focusing on wound healing our research will aim to study delta-notch signalling."
                                icon3={<MemoryIcon/>}
                                icon3tip='CHASTE'
                                icon3link='https://www.cs.ox.ac.uk/chaste/'
                            />
                        </Box>
                    </Box>
                </Box> 
            </Box>
        </>
    );
}

export default Home;