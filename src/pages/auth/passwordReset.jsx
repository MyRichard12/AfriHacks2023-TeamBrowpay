import React, {useState} from "react";
import { Link as Nav} from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Card, CssBaseline, FormControlLabel, TextField, Checkbox, Link, Paper, Avatar, Button, Box, Grid } from "@mui/material";
import { base_url, httpService } from "../../apis/config";
import { initiateReset, loginUserApi } from "../../apis/authApi";
import axios from "axios";


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        SellerAI&trade; by
        <Link color="inherit" href="https://browpay.com">
        {' '}Browpay
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const initialValues = {
    email: ''
  }

const defaultTheme = createTheme();


const PasswordReset = () => {

  const [formValues, setFormValues] = useState(initialValues)

  const handleInput = (event) => {
    const { name, value }  = event.target

    setFormValues({...formValues, [name] : value})
  }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });

        // console.log(formValues)

        await initiateReset(formValues)
       

      };

    return (
        <>
        <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" >
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}

          component={Paper}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter email
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              // autoComplete="email"
              onChange={handleInput}
            />
           <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Reset Password
            </Button>
            <Grid container>
              <Grid item> 
              Try {" "}
                <Nav to="/" variant="body2">
                  {"Sign In"}
                </Nav>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>       
        </>
    )
}

export default PasswordReset