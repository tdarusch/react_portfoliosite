import React from "react";
import { Card, CardContent, CardActions, IconButton, Typography, CardMedia, Link, CardHeader } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from "@mui/material/Tooltip";

const DisplayCard = ({
    title='', 
    subtitle='',
    image='',
    link='',
    bgc='',
    tc='',
    tc2='',
    desc='',
    github,
    icon3,
    icon3tip,
    icon4,
    icon4tip,
    icon3link,
    icon4link
}) =>{
    return(
        <Card 
            sx={{
                width: 500,
                height: 700,
                color: tc,
                backgroundColor: bgc,
                mx: 1.5,
                transition: '.25s ease-in-out',
                ':hover': {
                    boxShadow: 20,
                },
            }}
        >
            <CardHeader
                title={title}
                subheader={subtitle}
                sx={{
                    color: tc,
                    '.MuiCardHeader-subheader' : {
                        color: tc2
                    }
                }}
            />
            <CardMedia
                component='img'
                height="400"
                src={image}
            />
            <CardContent>
                <Typography variant="body2" sx={{color: tc2}}>
                    {desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip title='Read More'>
                    <Link to={link} style={{textDecoration: 'none', color: tc}}>
                        <IconButton sx={{color: tc}}>
                            <ArticleIcon/>
                        </IconButton>
                    </Link>
                </Tooltip>
                {github && <Tooltip title='GitHub'><IconButton href={github}><GitHubIcon sx={{color: tc}}/></IconButton></Tooltip>}
                {icon3 && <Tooltip title={icon3tip}><IconButton sx={{color: tc}} href={icon3link}>{icon3}</IconButton></Tooltip>}
                {icon4 && <Tooltip title={icon4tip}><IconButton sx={{color: tc}} href={icon4link}>{icon4}</IconButton></Tooltip>}
            </CardActions>
        </Card>
    )
};

export default DisplayCard;