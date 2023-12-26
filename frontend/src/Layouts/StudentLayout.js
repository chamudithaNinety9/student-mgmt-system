import React from "react";
import Media from "react-media";
import { Outlet } from "react-router-dom";
import Button from '@mui/material/Button';
// ---------Mui-Imports-----------------

import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Divider, Grid, Link, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

// ---------Mui-Icons-----------------

import BadgeIcon from '@mui/icons-material/Badge';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';


const StudentLayout = () =>{

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
        <Media query="(max-width: 900px)">
            {(matches) => {
                return matches ? (
                    <Grid item sm={12} md={12} xs={12} sx={{ paddingTop: { xs: '100px', sm: '100px' } }}>
                      <h1>menu</h1>
                    </Grid>
                ) : (
                    <Grid item md={2} lg={1.5} sx={{ position: 'relative', paddingTop: { md: '80px', lg: '100px', zIndex:'0' } }}>
                          <List sx={{mt:'30px',ml:'10px'}}>
                                <ListItemButton href="/Student/:id">
                                    <ListItemIcon><BadgeIcon /></ListItemIcon>
                                    <ListItemText >Student Report</ListItemText>
                                </ListItemButton>
                                <ListItemButton href="/Student/resources">
                                    <ListItemIcon><AutoStoriesIcon/></ListItemIcon>
                                    <ListItemText >Resources</ListItemText>
                                </ListItemButton>
 
                        </List>
                        
                    </Grid>
                );
            }}
        </Media>
        
        {/* ========================================Body============================== */}

        <Grid
        
            item
            xs={12}
            sm={12}
            md={10}
            lg={10.5}
            sx={{ padding: { xs: '20px 20px', sm: '20px 20px', md: '120px 20px', lg: '140px 20px' }, position: 'relative' }}
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

export default StudentLayout