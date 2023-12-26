
import React from "react";
import Media from "react-media";
import { Outlet } from "react-router-dom";

// ---------Mui-Imports-----------------

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Grid, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';

// ---------Mui-Icons-----------------

import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import MessageIcon from '@mui/icons-material/Message';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';


const TeacherLayout = () =>{

return(
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={0} sx={{ position: 'relative' }}>
        {/* ================================Header============================ */}
        <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            sx={{ padding: '5px', zIndex: '1', backgroundColor:"#18266e", position: 'fixed', width: '100%' }}
        >
            <Box sx={{display:"flex"}}>
                <h1 style={{textAlign:"start", marginLeft:15 ,color:"white"}}>SmartMarks</h1>

                <Button href="/" sx={{right:27 ,top:25, position:"absolute"}}>
                <Typography sx={{fontSize:20,color:"white"}}>Logout</Typography>
                </Button>
            </Box>
        </Grid>
        
        {/* ================================SideBar============================ */}
       
                    <Grid item xs={2} sm={2} md={2} lg={1.5} sx={{ position: 'absolute', paddingTop:'70px' ,paddingBottom:28}}>
                          <List sx={{mt:'30px',ml:'10px'}}>
                          <ListItemButton href="/Teacher">
                                    <ListItemIcon><HomeIcon/></ListItemIcon>
                                    <ListItemText >Home</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Teacher/TeacherList">
                                    <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                                    <ListItemText >Teachers</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Teacher/StudentList">
                                    <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                                    <ListItemText >Students</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Teacher/SubjectList">
                                    <ListItemIcon><AutoAwesomeMotionIcon /></ListItemIcon>
                                    <ListItemText >Subjects</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Teacher/MarkList">
                                    <ListItemIcon><TypeSpecimenIcon/></ListItemIcon>
                                    <ListItemText >Marks</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="#">
                                    <ListItemIcon><MessageIcon/></ListItemIcon>
                                    <ListItemText >Parent's Feedback</ListItemText>
                                </ListItemButton>
                        </List>
                        
                    </Grid>
  
        
  

        <Grid
        
            item
            xs={12}
            sm={12}
            md={10}
            lg={10.5}
            sx={{ padding: { xs: '80px 20px', sm: '80px 20px', md: '80px 20px', lg: '80px 20px' }, position: 'relative' ,marginLeft:"200px" ,marginBottom:"0px"}}
        >
            
            <Outlet />
        </Grid>
    </Grid>

    {/* ================================Footer============================ */}   
    <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            sx={{ padding: '10px', zIndex: '1', backgroundColor:"#18266e", position:'fixed', width: '100%',bottom:'0px' }}
        >
      <Typography > Copyrights © {new Date().getFullYear()} <a style={{fontWeight:'bold',color:'white'}} href='#' target="_Blank"> SmartMarks</a></Typography>  
  
    </Grid>
    
</Box>
)

}

export default TeacherLayout