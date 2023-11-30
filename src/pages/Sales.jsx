import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from '../components';
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, textVariant } from '../utils/motion'
import { Container, Card, CssBaseline, FormControlLabel, TextField, Checkbox, Link, Paper, Avatar, Button, Box, Grid } from "@mui/material";
import { useEffect, useState } from 'react';



const defaultTheme = createTheme();

function Sales() {
  const productItems = [
    {
      product_name: '',
      quantity: '',
      unit_price: '',
      price: ''
    }
  ]

  const itemStub = {
    product_name: '',
    quantity: '',
    unit_price: '',
    price: ''
  }

  const initialValues = {
    email: '',
    password: ''
  }  

  const [items, itemTrigger] = useState(productItems)
  
  const addItem = () => {
    // my first error approach
    // itemTrigger(items.push({
    //   ...itemStub
    // }))

    // the correct approach
    itemTrigger([...items, itemStub])
  }
  
  const removeItem = (index) => {
    const last_index = items.length
    
    // console.log(index,last_index)

    if(index  !== -1){
      

      // in this case the itemtrigger has to take on more than just the newarray the new array has to be rendered REACTIVELY within it
      // error approach
      // const updatedItem = item.slice()
      //  updatedItem.splice(index, 1)
      // itemTrigger(updatedItem)

      // correct approach
      itemTrigger(item => {
        const updatedItem = item.slice()
        updatedItem.splice(index, 1)

        return updatedItem
      })

      console.log(items)
    }
    
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

            {/* invoice fields */}
  
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

            {/* product fields */}
            <p className='mb-2 text-lg font-medium'>Product Details</p>

            {items.map((values, index) => {
              return (
              <InvoiceFields fields={values} key={index} index={index} remove={() => removeItem(index)}/>
              );
            })}

            <div className="flex gap-10 mx-auto w-fit">
            <div className="bg-green-500 w-fit py-2 px-4 text-white cursor-pointer" onClick={() => addItem()}>Add Product </div> 
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


const InvoiceFields = ({fields, index, remove}) => {

const removeItem = (index) => {
  if(remove){
    remove(index)
  }
}  


  return(
    <div>
      <div className="flex justify-between">
        <span>Item {index +1}</span>
        <span className='text-gray-600 cursor-pointer' onClick={removeItem}>{index > 0 &&  'Remove'}</span>
        </div>
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
            <div className="border-b-2" />
            </div>
  )
}

export default Sales;