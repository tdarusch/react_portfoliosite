import React, { useState, useCont } from "react";
import { Typography, Divider, Drawer, List, ListItemIcon, ListItem, ListItemButton, ListItemText, Collapse, IconButton, Box, ListItemAvatar, Avatar  } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import { grey, blueGrey } from '@mui/material/colors';
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
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import HomePage from './Pages/Home.jsx';
import BlogPage from './Pages/Blog';
import ContactPage from './Pages/Contact';
import CVPage from './Pages/CV';
import GalleryPage from './Pages/Gallery';
// import GithubPage from './Pages/Github';
// import InstagramPage from './Pages/Instagram';
// import LinkedInPage from './Pages/LinkedIn';
import PortfolioSitePage from './Pages/PortfolioSite';
import ReccsPage from './Pages/Reccs';
import RomulusPage from './Pages/Romulus';
// import RYMPage from './Pages/RYM';
import CellSims from "./Pages/CellSims.jsx";
import Landing from "./Pages/Landing.jsx";

const Platinum = 'E0E1DD';
const SilverLakeBlue = '778DA9';
const YinMnBlue = '415A77';
const OxfordBlue = '1B263B';
const RichBlack = '0D1B2A';

const drawerWidth = 240;

const ColoredListBtn = styled(ListItemButton)({
  height: 50,
  maxHeight: 50,
  maxWidth: drawerWidth,
  userSelect: 'none',
});

const greyColors = {
  theme: 'grey',
  c2: grey[200],
  c3: grey[300],
  c4: grey[400],
  c5: grey[500],
  c6: grey[600],
  c7: grey[700],
  c8: grey[800],
  c9: grey[900],
  tc: '#1a1a1a',
  tc2: '#262626',
  bgc: grey[200]
};
const blueGreyColors = {
  theme: 'blueGrey',
  c2: blueGrey[200],
  c3: blueGrey[300],
  c4: blueGrey[400],
  c5: blueGrey[500],
  c6: blueGrey[600],
  c7: blueGrey[700],
  c8: blueGrey[800],
  c9: blueGrey[900],
  tc: '#1a1a1a',
  tc2: '#262626',
  bgc: blueGrey[200]
};
const darkColors = {
  theme: 'dark',
  c2: '#333333',
  c3: '#262626',
  c4: '#1a1a1a',
  c5: '#0d0d0d',
  c6: '#0d0d0d',
  c7: '#0d0d0d',
  c8: '#0d0d0d',
  c9: '#0d0d0d',
  tc2: grey[500],
  tc: grey[100],
  bgc: '#333333'
};
const tanColors = {
  theme: 'tan',
  c2: '#ded9d3',
  c3: '#b3a698',
  c4: '#93806c',
  c5: '#847362',
  c6: '#756757',
  c7: '#675a4c',
  c8: '#584d41',
  c9: '#3b332b',
  tc: '#1a1a1a',
  tc2: '#262626',
  bgc: '#ded9d3'
};

function App() {
  const[page, setPage] = useState({
    mainPage: 'home',
    subPage: ''
  });
  const[openProjects, setOpenProjects] = useState(false);
  const[openLinks, setOpenLinks] = useState(false);
  const[colors, setColorTheme] = useState(greyColors);

  const handleTheme = (newTheme) =>{
    if(newTheme === 'grey'){
      setColorTheme(greyColors);
    } else if(newTheme === 'blueGrey'){
      setColorTheme(blueGreyColors);
    } else if(newTheme === 'dark'){
      setColorTheme(darkColors);
    } else if(newTheme === 'tan'){
      setColorTheme(tanColors);
    }
  }

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
      }
      setOpenProjects(false);
    } else if(mPage === 'demos') {

    } else {
      setPage({mainPage: mPage, subPage: ''});
      setOpenProjects(false);
      setOpenLinks(false);
    }
  }

  return (
    <>
      <Box sx={{display: 'flex'}}>
        <Router>
          <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                overflowX: 'hidden',
                userSelect: 'none',
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'content-box',
                    backgroundColor: colors.c3,
                },
                }}
                variant="permanent"
                anchor="left"
          >
            <List sx={{width: drawerWidth,  overflowX: 'hidden', minHeight: 385}}>
              <ListItem sx={{display: 'flex', justifyContent: 'center', py: 0}}>
                <ListItemAvatar>
                  <Avatar src='https://avatars.githubusercontent.com/u/29466901?v=4'/>
                </ListItemAvatar>
                <Typography sx={{userSelect: 'none', variant: 'h4', color: colors.tc}}><b>Tom Rusch</b></Typography>
              </ListItem>
              <ListItem sx={{display: 'flex', justifyContent: 'center', paddingBottom: '1', paddingTop: 0}}>
                <Typography sx={{userSelect: 'none', variant: 'h4', textAlign: 'center', color: colors.tc}}>Augusta University Comp. Sci. '24</Typography>
              </ListItem>
              <Divider/>
              <ListItem disablePadding>
                <Link to='/landing' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}> 
                  <ColoredListBtn 
                    onClick={() => handleClick({mPage: 'landing', sPage: ''})}
                    selected={page.mainPage==='landing'}
                    sx={{
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                        <RocketLaunchIcon fontSize="medium" disablePadding sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary='Landing' sx={{color: colors.tc}}/>
                  </ColoredListBtn>
                </Link>
              </ListItem>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <Link to='/' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                  <ColoredListBtn
                    color = {colors.c3}
                    selected={page.mainPage==='home'}
                    onClick={() => handleClick({mPage: 'home', sPage: ''})}
                    sx={{
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                        <HomeIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary='Home' sx={{marginRight: 12.625, color: colors.tc}}/>
                  </ColoredListBtn>
                </Link>
              </ListItem>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <ColoredListBtn 
                  onClick={() => handleClick({mPage: 'projects', sPage: ''})}
                  sx={{
                    "&.Mui-selected, &.Mui-selected:hover": {
                      backgroundColor: colors.c4
                    }
                  }}
                >
                  <ListItemIcon sx={{minWidth: 30}}>
                      <BuildIcon fontSize="medium" disablePadding sx={{color: colors.tc}}/>
                  </ListItemIcon>
                  <ListItemText primary='Projects' sx={{color: colors.tc}}/>
                  <ListItemIcon>
                    {openProjects ? <ExpandLess sx={{paddingLeft: 20.25, color: colors.tc}}/> : <ExpandMore sx={{paddingLeft: 20.25, color: colors.tc}}/>}
                  </ListItemIcon>
                </ColoredListBtn>
              </ListItem>
              <Collapse in={openProjects} timeout='auto' unmountOnExit>
                <List disablePadding>
                  <Link to='projects/romulus' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                    <ColoredListBtn 
                      sx={{
                        pl: 3,
                        "&.Mui-selected, &.Mui-selected:hover": {
                          backgroundColor: colors.c4
                        }
                      }}
                      onClick={() => handleClick({mPage: 'projects', sPage: 'romulus'})}
                      selected={page.subPage==='romulus'}
                    >
                      <ListItemIcon sx={{minWidth: 30}}>
                        <LabelIcon fontSize="medium" disablePadding sx={{color: colors.tc}}/>
                      </ListItemIcon>
                      <ListItemText primary="Romulus" sx={{color: colors.tc}}/>
                    </ColoredListBtn>
                  </Link>
                  <Link to='projects/cellsimulations' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                    <ColoredListBtn 
                      sx={{
                        pl: 3,
                        "&.Mui-selected, &.Mui-selected:hover": {
                          backgroundColor: colors.c4
                        }
                      }}
                      onClick={() => handleClick({mPage: 'projects', sPage: 'cellsims'})}
                      selected={page.subPage==='cellsims'}
                    >
                      <ListItemIcon sx={{minWidth: 30}}>
                        <LabelIcon fontSize="medium" sx={{color: colors.tc}}/>
                      </ListItemIcon>
                      <ListItemText primary="Cell Simulations" sx={{color: colors.tc}}/>
                    </ColoredListBtn>
                  </Link>
                  <Link to='projects/portfolio_site' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                    <ColoredListBtn 
                      sx={{
                        pl: 3,
                        "&.Mui-selected, &.Mui-selected:hover": {
                          backgroundColor: colors.c4
                        }
                      }}
                      onClick={() => handleClick({mPage: 'projects', sPage: 'psite'})}
                      selected={page.subPage==='psite'}
                    >
                      <ListItemIcon sx={{minWidth: 30}}>
                        <LabelIcon fontSize="medium" sx={{color: colors.tc}}/>
                      </ListItemIcon>
                      <ListItemText primary="Portfolio Site" sx={{color: colors.tc}}/>
                    </ColoredListBtn>
                  </Link>
                </List>
              </Collapse>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <Link to='/cv' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                  <ColoredListBtn 
                      onClick={() => handleClick({mPage: 'cv', sPage: ''})}
                      selected={page.mainPage==='cv'}
                      sx={{
                        "&.Mui-selected, &.Mui-selected:hover": {
                          backgroundColor: colors.c4
                        }
                      }}
                    >
                      <ListItemIcon sx={{minWidth: 30}}>
                          <DescriptionIcon fontSize="medium" sx={{color: colors.tc}}/>
                      </ListItemIcon>
                      <ListItemText primary='CV' sx={{width: drawerWidth, color: colors.tc}}/>
                  </ColoredListBtn>
                </Link>
              </ListItem>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <Link to='/blog' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                  <ColoredListBtn 
                      onClick={() => handleClick({mPage: 'blog', sPage: ''})}
                      selected={page.mainPage==='blog'}
                      sx={{
                        "&.Mui-selected, &.Mui-selected:hover": {
                          backgroundColor: colors.c4
                        }
                      }}
                    >
                      <ListItemIcon sx={{minWidth: 30}}>
                          <ImportContactsIcon fontSize="medium" sx={{color: colors.tc}}/>
                      </ListItemIcon>
                      <ListItemText primary='Blog' sx={{width: drawerWidth, color: colors.tc}}/>
                  </ColoredListBtn>
                </Link>
              </ListItem>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <ColoredListBtn 
                    // onClick={() => handleClick({mPage: 'github', sPage: ''})}
                    // selected={page.mainPage==='github'}
                    target="_blank"
                    href="https://github.com/tdarusch"
                    sx={{
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                        <GitHubIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary='Github' sx={{color: colors.tc}}/>
                </ColoredListBtn>
              </ListItem>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <ColoredListBtn 
                  onClick={() => handleClick({mPage: 'links', sPage: ''})}
                  sx={{
                    "&.Mui-selected, &.Mui-selected:hover": {
                      backgroundColor: colors.c4
                    }
                  }}
                >
                    <ListItemIcon sx={{minWidth: 30}}>
                        <LinkIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary='Links' sx={{paddingRight: 15, color: colors.tc}}/>
                    <ListItemIcon>
                      {openLinks ? <ExpandLess sx={{paddingLeft: 5, color: colors.tc}}/> : <ExpandMore sx={{paddingLeft: 5, color: colors.tc}}/>}
                    </ListItemIcon>
                </ColoredListBtn>
              </ListItem>
              <Collapse in={openLinks} timeout='auto' unmountOnExit>
                <List disablePadding>
                  <ColoredListBtn 
                    sx={{
                      pl: 3,
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                    // onClick={() => handleClick({mPage: 'links', sPage: 'linkedin'})}
                    // selected={page.subPage==='linkedin'}
                    target="_blank"
                    href="https://www.linkedin.com/in/tommy-rusch-4030901b0/"
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                      <LinkedInIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" sx={{color: colors.tc}}/>
                  </ColoredListBtn>
                  <ColoredListBtn 
                    sx={{
                      pl: 3,
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                    // onClick={() => handleClick({mPage: 'links', sPage: 'instagram'})}
                    // selected={page.subPage==='instagram'}
                    target="_blank"
                    href="https://www.instagram.com/tomatoplnt/"
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                      <InstagramIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary="Instagram" sx={{color: colors.tc}}/>
                  </ColoredListBtn>
                  <ColoredListBtn 
                    sx={{
                      pl: 3,
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                    // onClick={() => handleClick({mPage: 'links', sPage: 'rym'})}
                    // selected={page.subPage==='rym'}
                    target="_blank"
                    href="https://rateyourmusic.com/~tom3720"
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                      <AlbumIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary="RYM" sx={{color: colors.tc}}/>
                  </ColoredListBtn>
                </List>
              </Collapse>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <Link to='/gallery' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                  <ColoredListBtn 
                    onClick={() => handleClick({mPage: 'gallery', sPage: ''})}
                    selected={page.mainPage==='gallery'}
                    sx={{
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                        <CameraIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary='Gallery' sx={{width: drawerWidth, color: colors.tc}}/>
                  </ColoredListBtn>
                </Link>
              </ListItem>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <Link to='/recommendations' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                  <ColoredListBtn 
                    onClick={() => handleClick({mPage: 'reccs', sPage: ''})}
                    selected={page.mainPage==='reccs'}
                    sx={{
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                        <BookmarksIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary='Recommendations' sx={{width: drawerWidth, color: colors.tc}}/>
                  </ColoredListBtn>
                </Link>
              </ListItem>
              <ListItem disablePadding sx={{width: drawerWidth}}>
                <Link to='/contact' style={{textDecoration: 'none', color: 'black', width: drawerWidth}}>
                  <ColoredListBtn 
                    onClick={() => handleClick({mPage: 'contact', sPage: ''})}
                    selected={page.mainPage==='contact'}
                    sx={{
                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: colors.c4
                      }
                    }}
                  >
                    <ListItemIcon sx={{minWidth: 30}}>
                        <EmailIcon fontSize="medium" sx={{color: colors.tc}}/>
                    </ListItemIcon>
                    <ListItemText primary='Contact' sx={{width: drawerWidth, color: colors.tc}}/>
                  </ColoredListBtn>
                </Link>
              </ListItem>
              <Divider/>
            </List>
            <Box disablePadding sx={{display: 'flex', justifyContent: 'center', width: drawerWidth, minWidth: drawerWidth, overflowX: 'hidden', height: 30, boxSizing: 'content-box'}}>
              <Radio
                checked={colors.theme === 'grey'}
                onClick={() => handleTheme('grey')}
                sx={{
                  color: greyColors.c3,
                  '&.Mui-checked': {
                    color: greyColors.c5,
                  },
                }}
              />
              <Radio
                checked={colors.theme === 'blueGrey'}
                onClick={() => handleTheme('blueGrey')}
                sx={{
                  color: blueGreyColors.c4,
                  '&.Mui-checked': {
                    color: blueGreyColors.c6,
                  },
                }}
              />
              <Radio
                checked={colors.theme === 'dark'}
                onClick={() => handleTheme('dark')}
                sx={{
                  color: darkColors.c3,
                  '&.Mui-checked': {
                    color: darkColors.c5,
                  },
                }}
              />
              <Radio
                checked={colors.theme === 'tan'}
                onClick={() => handleTheme('tan')}
                sx={{
                  color: tanColors.c4,
                  '&.Mui-checked': {
                    color: tanColors.c6,
                  },
                }}
              />
            </Box>
          </Drawer>
          <Routes>
            <Route path="/" element={<HomePage colorTheme={colors}/>}>
              <Route path="cellsimulations" element={CellSims}/>
              <Route path="portfolio_site" element={PortfolioSitePage}/>
              <Route path="romulus" element={RomulusPage}/>
            </Route>
            <Route path="/landing" element={<Landing colorTheme={colors}/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/cv" element={<CVPage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            {/* <Route path="/links/external" element={<External/>}/> */}
            <Route path="/projects/portfolio_site" element={<PortfolioSitePage/>}/>
            <Route path="/recommendations" element={<ReccsPage/>}/>
            <Route path="/projects/romulus" element={<RomulusPage/>}/>
            <Route path="/projects/cellsimulations" element={<CellSims/>}/>
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
