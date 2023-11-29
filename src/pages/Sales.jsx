import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from '../components';
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, textVariant } from '../utils/motion'
import { Container, Card, CssBaseline, FormControlLabel, TextField, Checkbox, Link, Paper, Avatar, Button, Box, Grid } from "@mui/material";



const defaultTheme = createTheme();
function Sales() {
  const initialValues = {
    email: '',
    password: ''
  }
  return (
    <>
      <ThemeProvider theme={defaultTheme} />
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Navbar />
        <div className='mt-20' />
        <motion.div 
            className='w-full'
            variants={staggerContainer}
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
          <div className='mt-5'>
            <motion.div variants={textVariant(1.1)} >
              <h1 className="head_text blue_gradient sm:text-center">Get Started Today</h1>
              <h1 className="text-[18px] font-bold mt-5 sm:text-[20px] sm:text-center">Fill out the form below let us know your needs</h1>
            </motion.div>          
          </div>
        </motion.div>

        <div className='max-w-[800px] mt-16'>
          <form action="" method="post" className=' bg-white p-4 border rounded-lg gap-6 shadow-lg'>
            <p className='mb-2 text-lg font-medium'>Customer Information</p>
            <TextField
              margin="normal"
              required
              fullWidth
              name="customer-name"
              label="Customer Name"
              type="name"
              id="password"
              className='input mb-4'
              // autoComplete="current-password"
              // onChange={handleInput}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <TextField
                margin="normal"
                required
                fullWidth
                name="Invoice ID"
                label="Invoice ID"
                type="number"
                id="invoice-id"
                className='input mb-4'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Invoice Date"
                label="Invoice Date"
                type="date"
                id="invoice-date"
                className='input mb-4'
              />
            </div>
            <p className='mb-2 text-lg font-medium'>Product Details</p>
            <div className="grid grid-cols-2 gap-3">
            <TextField
                margin="normal"
                required
                fullWidth
                name="Product Name"
                label="Product Name"
                type="text"
                id="product-name"
                className='input mb-4'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Quantity"
                label="Quantity"
                type="text"
                id="quantity"
                className='input mb-4'
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
            <TextField
                margin="normal"
                required
                fullWidth
                name="Unit Price"
                label="Unit Price"
                type="text"
                id="unit-price"
                className='input mb-4'
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Total Price"
                label="Total Price"
                type="text"
                id="total-price"
                className='input mb-4'
              />
            </div>

            <Button
              type="submit"
              fullWidth
              className="bg-orange-900"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>

          


        </div>
        
      </div>

      
      
    </>
  )
}

export default Sales;