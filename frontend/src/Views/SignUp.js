import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';


 
    <Typography > Copyrights © {new Date().getFullYear()} <a style={{fontWeight:'bold',color:'white'}} href='#' target="_Blank"> SmartMarks</a></Typography> 


const theme = createTheme();

export default function SignUp() {

const [uType, setUserType] = useState();
const [email, setEmail] = useState();
const [userID, setUserID] = useState();
const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {email ,userID ,password ,uType};
    console.log("data::",data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <Avatar sx={{ m: 1,marginTop:3, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  label="UserID"
                  name="username"
                  required
                  fullWidth
                  type=""
                  id="username"
                  value={userID}
                  onChange={(event) => setUserID(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  type=""
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>

              <Grid item xs={12} >
                  <FormControl>
                    <FormLabel id="demo-controlled-radio-buttons-group">User Type</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                    //   value={uType}
                      onChange={(event) => setUserType(event.target.value)}
                    >
                      <FormControlLabel value="Student" control={<Radio />} label="Student" />
                      <FormControlLabel value="Teacher" control={<Radio />} label="Teacher" />
                    </RadioGroup>
                  </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{marginTop:3}}>
        <Typography > Copyrights © {new Date().getFullYear()} <a style={{fontWeight:'bold',color:'white'}} href='#' target="_Blank"> SmartMarks</a></Typography> 
        </Box>
      </Container>
    </ThemeProvider>
  );
}