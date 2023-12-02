import React, {useEffect, useState} from "react";
import { Link as Nav} from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Card, CssBaseline, FormControlLabel, TextField, Checkbox, Link, Paper, Avatar, Button, Box, Grid } from "@mui/material";
import { verifyPassToken } from "../../apis/authApi";


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        Seller-AI&trade; by
        <Link color="inherit" href="https://browpay.com">
        {' '}Browpay
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const initialValues = {
    password: '',
    repeat_password: ''
  }

const defaultTheme = createTheme();


const passwordConfirm = () => {

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

        console.log(formValues)
      };

      useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const token = queryParams.get('token')

        let payload = verifyPassToken(token)


      }, [])

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
          {/* <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Enter new password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password1"
              label="Enter Password"
              name="password"
              type="password"
              // autoComplete="email"
              onChange={handleInput}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password2"
              label="Repeat Password"
              name="repeat_password"
              type="password"
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

export default passwordConfirm