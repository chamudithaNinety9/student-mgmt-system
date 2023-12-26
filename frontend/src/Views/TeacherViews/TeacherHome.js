import React from "react";
import { Divider, Grid, ListItemButton, Typography ,Link} from "@mui/material";
import Box from "@mui/material/Box/Box";

function TeacherHome (){

return(
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop:2}}>
    
        <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
            <Link href="/Teacher/TeacherList">
            <Box sx={{    
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius:5,
                    height:200 ,
                    marginLeft:10,
                    marginBottom:5, 
                    // backgroundImage: 'url("https://imageio.forbes.com/specials-images/imageserve/5f29cbd1ef38bc3956983a4e/0x0.jpg?format=jpg&width=1200")'}} >
                     backgroundImage: 'url("https://reaction.life/wp-content/uploads/elementor/thumbs/shutterstock_637357240-scaled-pb2hjemgkbgongej809kbh92s9um16o3uxhjpm8h3s.jpg")'}} >   
                {/* <Typography>Teachers Count</Typography> */}

            </Box>
            </Link>
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
            <Link href="/Teacher/StudentList">
            <Box sx={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius:5,
                  height:200 ,
                  marginLeft:10,
                  marginBottom:5, 
                  backgroundImage: 'url("https://media.istockphoto.com/id/1300352325/photo/smiling-african-american-school-girl-sitting-at-desk-in-classroom.jpg?b=1&s=170667a&w=0&k=20&c=QztRCmn0ezerTG9Ah-lvGeVCMrecP9Zc6DhUCVj9XEw=")'}} >
                    {/* <Typography>Students Count</Typography> */}

            </Box>
            </Link >
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
            <Link href="/Teacher/SubjectList">
            <Box sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius:5,
                height:200 ,
                marginLeft:10,
                marginBottom:5, 
                backgroundImage: 'url("https://t3.ftcdn.net/jpg/04/45/77/54/360_F_445775426_yx3Wl5UCTJOom5lSryjYYQjDkes0X23i.jpg")'}} >
                    {/* <Typography>Subjects Count</Typography> */}

            </Box>
            </Link>
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
            <Link href="/Teacher/MarkList">
            <Box sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius:5,
                height:200 ,
                marginLeft:10,
                marginBottom:5, 
                backgroundImage: 'url("https://thumbs.dreamstime.com/b/schoolboy-portrait-teenager-sitting-table-home-showing-perfect-test-results-54264874.jpg")'}} >
                    {/* <Typography>Marks Count</Typography> */}

            </Box>
            </Link> 
        </Grid>


        <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
            <Link href="#">
            <Box sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius:5,
                height:200 ,
                marginLeft:10,
                marginBottom:5, 
                backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/01/25/65/91/1000_F_125659114_i88DYoe8M3azvonafbuCO52rAunUhDbG.jpg")'}} >
                    {/* <Typography>Parent Messages Count</Typography> */}

            </Box>
            </Link>
        </Grid>

        <Grid item xl={3} lg={4} md={6} sm={8} xs={12}>
            <Link href="#">
            <Box sx={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius:5,
                height:200 ,
                marginLeft:10,
                marginBottom:5, 
                backgroundImage: 'url("https://as2.ftcdn.net/v2/jpg/01/25/65/91/1000_F_125659114_i88DYoe8M3azvonafbuCO52rAunUhDbG.jpg")'}} >
                    {/* <Typography>Parent Messages Count</Typography> */}

            </Box>
            </Link>
        </Grid>

    </Grid>
)
}

export default TeacherHome