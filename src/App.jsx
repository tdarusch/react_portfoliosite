import React, { useState, useCont } from "react";
import { Typography, Divider, Drawer, List, ListItemIcon, ListItem, ListItemButton, ListItemText, Collapse, IconButton  } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import { grey } from '@mui/material/colors';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import LabelIcon from '@mui/icons-material/Label';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import GitHubIcon from '@mui/icons-material/GitHub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlbumIcon from '@mui/icons-material/Album';
import CameraIcon from '@mui/icons-material/Camera';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Link } from "react-router-dom";

const Platinum = 'E0E1DD';
const SilverLakeBlue = '778DA9';
const YinMnBlue = '415A77';
const OxfordBlue = '1B263B';
const RichBlack = '0D1B2A';

const grey300 = grey[300];
const grey400 = grey[400];
const grey500 = grey[500];
const grey600 = grey[600];
const grey700 = grey[700];
const grey800 = grey[800];
const grey900 = grey[900];

const drawerWidth = 240;

const ColoredListBtn = styled(ListItemButton)({
  height: 30,
  maxHeight: 30,
  "&.Mui-selected, &.Mui-selected:hover": {
    backgroundColor: grey400
  }
});

function App() {
  const[page, setPage] = useState({
    mainPage: 'home',
    subPage: ''
  });
  const[openProjects, setOpenProjects] = useState(false);
  const[openLinks, setOpenLinks] = useState(false);

  const handleClick = ({mPage, sPage}) => {
    if(mPage === 'projects'){
      if(openProjects){
        if(sPage !== ''){
          setPage({mainPage: mPage, subPage: sPage});
        } else {
          setOpenProjects(false);
        }
      } else {
        setOpenProjects(true);
        setPage({mainPage: 'projects', subPage: ''});
      }
      setOpenLinks(false);
    } else if(mPage === 'links'){
      if(openLinks){
        if(sPage !== ''){
          setPage({mainPage: mPage, subPage: sPage});
        } else {
          setOpenLinks(false);
        }
      } else {
        setOpenLinks(true);
        setPage({mainPage: 'links', subPage: ''});
      }
      setOpenProjects(false);
    } else {
      setPage({mainPage: mPage, subPage: ''});
      setOpenProjects(false);
      setOpenLinks(false);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Drawer
              sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                  backgroundColor: grey300,
              },
              }}
              variant="permanent"
              anchor="left"
        >
          <List>
            <ListItem disablePadding>
              <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                <ColoredListBtn
                  color = {grey300}
                  selected={page.mainPage==='home'}
                  onClick={() => handleClick({mPage: 'home', sPage: ''})}
                  
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                      <HomeIcon fontSize="small"/>
                  </ListItemIcon>
                  <ListItemText primary='Home' sx={{marginRight: 12.625}}/>
                </ColoredListBtn>
              </Link>
              <IconButton
                sx={{
                  maxWidth: 30,
                  maxHeight: 30,
                  '& svg': {
                    transition: '0.1s',
                    transform: 'scale(1)',
                  },
                  '&:hover, &:focus': {
                    '& svg:first-of-type': {
                      transform: 'scale(1.25)'
                    }
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    height: '80%',
                    display: 'block',
                    left: 0,
                    width: '1px',
                    bgcolor: 'divider',
                  },
                }}
                selected={page.mainPage==='landing'}
                onClick={() => handleClick({mPage: 'landing', sPage: ''})}
              >
                <AutoAwesomeIcon fontSize="small" disablePadding/>
              </IconButton>
            </ListItem>
            <ListItem disablePadding>
              <ColoredListBtn onClick={() => handleClick({mPage: 'projects', sPage: ''})}>
                <ListItemIcon sx={{minWidth: 30}}>
                    <BuildIcon fontSize="small" disablePadding/>
                </ListItemIcon>
                <ListItemText primary='Projects'/>
                <ListItemIcon>
                  {openProjects ? <ExpandLess sx={{paddingLeft: 20.25}}/> : <ExpandMore sx={{paddingLeft: 20.25}}/>}
                </ListItemIcon>
              </ColoredListBtn>
            </ListItem>
            <Collapse in={openProjects} timeout='auto' unmountOnExit>
              <List disablePadding>
                <Link to='projects/romulus' style={{textDecoration: 'none', color: 'black'}}>
                  <ColoredListBtn 
                    sx={{ pl: 3 }}
                    onClick={() => handleClick({mPage: 'projects', sPage: 'romulus'})}
                    selected={page.subPage==='romulus'}
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                      <LabelIcon fontSize="small" disablePadding/>
                    </ListItemIcon>
                    <ListItemText primary="Romulus"/>
                  </ColoredListBtn>
                </Link>
                <ColoredListBtn 
                  sx={{ pl: 3 }}
                  onClick={() => handleClick({mPage: 'projects', sPage: 'cellsims'})}
                  selected={page.subPage==='cellsims'}
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                    <LabelIcon fontSize="small" disablePadding/>
                  </ListItemIcon>
                  <ListItemText primary="Cell Simulations"/>
                </ColoredListBtn>
                <ColoredListBtn 
                  sx={{ pl: 3 }}
                  onClick={() => handleClick({mPage: 'projects', sPage: 'psite'})}
                  selected={page.subPage==='psite'}
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                    <LabelIcon fontSize="small" disablePadding/>
                  </ListItemIcon>
                  <ListItemText primary="Portfolio Site"/>
                </ColoredListBtn>
              </List>
            </Collapse>
            <ListItem disablePadding>
              <ColoredListBtn 
                  onClick={() => handleClick({mPage: 'cv', sPage: ''})}
                  selected={page.mainPage==='cv'}
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                      <DescriptionIcon fontSize="small"/>
                  </ListItemIcon>
                  <ListItemText primary='CV'/>
              </ColoredListBtn>
            </ListItem>
            <ListItem disablePadding>
              <ColoredListBtn 
                  onClick={() => handleClick({mPage: 'blog', sPage: ''})}
                  selected={page.mainPage==='blog'}
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                      <ImportContactsIcon fontSize="small"/>
                  </ListItemIcon>
                  <ListItemText primary='Blog'/>
              </ColoredListBtn>
            </ListItem>
            <ListItem disablePadding>
              <ColoredListBtn 
                  onClick={() => handleClick({mPage: 'github', sPage: ''})}
                  selected={page.mainPage==='github'}
                  target="_blank"
                  href="https://github.com/tdarusch"
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                      <GitHubIcon fontSize="small"/>
                  </ListItemIcon>
                  <ListItemText primary='Github'/>
              </ColoredListBtn>
            </ListItem>

            <ListItem disablePadding>
              <ColoredListBtn onClick={() => handleClick({mPage: 'links', sPage: ''})}>
                  <ListItemIcon sx={{minWidth: 30}}>
                      <LinkIcon fontSize="small" disablePadding/>
                  </ListItemIcon>
                  <ListItemText primary='Links'/>
                  <ListItemIcon>
                    {openLinks ? <ExpandLess sx={{paddingLeft: 20.25}}/> : <ExpandMore sx={{paddingLeft: 20.25}}/>}
                  </ListItemIcon>
              </ColoredListBtn>
            </ListItem>
            <Collapse in={openLinks} timeout='auto' unmountOnExit>
              <List disablePadding>
                <ColoredListBtn 
                  sx={{ pl: 3 }}
                  onClick={() => handleClick({mPage: 'links', sPage: 'linkedin'})}
                  selected={page.subPage==='linkedin'}
                  target="_blank"
                  href="https://www.linkedin.com/in/tommy-rusch-4030901b0/"
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                    <LinkedInIcon fontSize="small" disablePadding/>
                  </ListItemIcon>
                  <ListItemText primary="LinkedIn"/>
                </ColoredListBtn>
                <ColoredListBtn 
                  sx={{ pl: 3 }}
                  onClick={() => handleClick({mPage: 'links', sPage: 'instagram'})}
                  selected={page.subPage==='instagram'}
                  target="_blank"
                  href="https://www.instagram.com/tomatoplnt/"
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                    <InstagramIcon fontSize="small" disablePadding/>
                  </ListItemIcon>
                  <ListItemText primary="Instagram"/>
                </ColoredListBtn>
                <ColoredListBtn 
                  sx={{ pl: 3 }}
                  onClick={() => handleClick({mPage: 'links', sPage: 'rym'})}
                  selected={page.subPage==='rym'}
                  target="_blank"
                  href="https://rateyourmusic.com/~tom3720"
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                    <AlbumIcon fontSize="small" disablePadding/>
                  </ListItemIcon>
                  <ListItemText primary="RYM"/>
                </ColoredListBtn>
              </List>
            </Collapse>
            <ListItem disablePadding>
              <ColoredListBtn 
                  onClick={() => handleClick({mPage: 'gallery', sPage: ''})}
                  selected={page.mainPage==='gallery'}
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                      <CameraIcon fontSize="small"/>
                  </ListItemIcon>
                  <ListItemText primary='Gallery'/>
              </ColoredListBtn>
            </ListItem>
            <ListItem disablePadding>
              <ColoredListBtn 
                  onClick={() => handleClick({mPage: 'reccs', sPage: ''})}
                  selected={page.mainPage==='reccs'}
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                      <BookmarksIcon fontSize="small"/>
                  </ListItemIcon>
                  <ListItemText primary='Recommendations'/>
              </ColoredListBtn>
            </ListItem>
            <ListItem disablePadding>
              <ColoredListBtn 
                  onClick={() => handleClick({mPage: 'contact', sPage: ''})}
                  selected={page.mainPage==='contact'}
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                      <EmailIcon fontSize="small"/>
                  </ListItemIcon>
                  <ListItemText primary='Contact'/>
              </ColoredListBtn>
            </ListItem>
          </List>
        </Drawer>
      </header>
    </div>
  );
}

export default App;
