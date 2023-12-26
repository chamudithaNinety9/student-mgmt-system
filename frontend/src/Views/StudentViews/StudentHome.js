import React, { useEffect, useState } from "react";
import { Box, Grid, Link, Typography } from '@mui/material';


function StudentHome (){

return(
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
    
        <Grid item xl={4} lg={5} md={5} sm={12}>
            <Box sx={{backgroundColor:"gray",borderRadius:5, height:300 ,marginLeft:10}}>
                <Typography>Marks Count</Typography>

            </Box>
        </Grid>

        <Grid item xl={4} lg={5} md={5} sm={12}>
            <Box sx={{backgroundColor:"gray",borderRadius:5, height:300 ,marginLeft:10}}>
                    <Typography>Messages Count</Typography>

            </Box>
        </Grid>


    </Grid>
    )

}

export default StudentHome;