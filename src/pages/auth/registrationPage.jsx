import React, {useState, useEffect} from "react";
import { Toaster } from "react-hot-toast";
import { Link as Nav, useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Card, CssBaseline, FormControlLabel, TextField, Checkbox, Link, Paper, Avatar, Button, Box, Grid } from "@mui/material";
import { base_url, httpService } from "../../apis/config";
import {useDispatch, useSelector } from 'react-redux'
import { registerUser } from "../../redux/actions/authAction.js";
import { generateRegistrationToken, registerUserApi } from "../../apis/authApi";
import Cookies from "universal-cookie";
import { sh_bag } from "../../assets";


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        KudiKart&trade; by
        <Link color="inherit" href="https://browpay.com">
        {' '}Browpay
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


const defaultTheme = createTheme();
const initialFormValues = {
    name: '',
    email: '',
    password: ''
}




const Register = () => {
    // use state to handle form value changes
    const [formValues, setFormValues] = useState(initialFormValues)

    // work on the reach state dispatch hook and other functionalities
    const dispatch = useDispatch()
    const history = useNavigate()
    const cookies = new Cookies()

    const loggedIn = useSelector(state => state.authReducer.isLoggedIn)
    const userData = useSelector(state => state.authReducer.data)

   
    const handleFormValues = (event) =>{
        const { name, value } = event.target

        setFormValues({...formValues, [name]: value})

        // console.log(formValues)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const data = new FormData(event.currentTarget);
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password')  
        // });
        
        const reg_params = {...formValues, name: formValues.firstName+' '+formValues.lastName}

        dispatch(registerUser({formData: reg_params}))
       
    }
        useEffect(() => {
            if(loggedIn){
                  cookies.set("SECRETKEY", userData.token, {
                    path: "/"
                  })
                  history('/dashboard')
                }              
        }, [loggedIn, history])

      

    return (
        <>
        <ThemeProvider theme={defaultTheme} />
        <div className="flex flex-wrap w-full h-screen justify-end bg-gray-100">
        {/* <CssBaseline /> */}
      <Toaster />
        <div className="hidden md:flex flex-col w-full md:w-3/5 sm:w-3/5 ">
          <img src={sh_bag} className="w-3/5 m-auto" alt="banner" />
        </div>
        <div className="flex flex-col w-full sm:w-2/5 md:w-2/5">
        
        <Nav to={`/`} className="mx-auto mt-28 md:mt-auto mb-4 text-center text-4xl font-semibold text-orange-700">KudiKart&trade; </Nav>
        <div className="w-full sm:w-4/5 md:w-4/5 mx-auto bg-white p-6 md:p-12 h-fit shadow-md rounded-lg">
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}

          component={``}
        >
         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleFormValues}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleFormValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleFormValues}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleFormValues}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Nav to="/login" variant="body2">
                  Already have an account? Sign in
                </Nav>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </div>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </div>
      </div>
          
        </>
    )
}

export default Register