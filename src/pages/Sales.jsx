import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from '../components';
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, textVariant } from '../utils/motion'
import { Container, Card, CssBaseline, FormControlLabel, TextField, Checkbox, Link, Paper, Avatar, Button, Box, Grid } from "@mui/material";
import { useEffect, useRef, useState } from 'react';



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

  const [items, itemTrigger] = useState(productItems)

  const itemStub = {
    product_name: '',
    quantity: null,
    unit_price: null,
    price: 0
  }

  // total fomvalues
  const invoiceFields = {
    email: '',
    invoice_id: '',
    invoice_date: new Date().toISOString().split('T')[0],
    invoice_prices: items,
    discount: '',
    sum_total: ''
  }  

  const [formField, triggerField] = useState(invoiceFields)
  
  const addItem = () => {
    // my first error approach
    // itemTrigger(items.push({
    //   ...itemStub
    // }))

    // the correct approach
    itemTrigger([...items, itemStub])
  }
  
  const removeItem = (deleteIndex) => {
    console.log(deleteIndex)
    if(deleteIndex  !== -1){
      // in this case the itemtrigger has to take on more than just the newarray the new array has to be rendered REACTIVELY within it
      // error approach
      // const updatedList = item.slice()
      //  updatedList.splice(index, 1)
      // itemTrigger(updatedList)

      // correct approach
      itemTrigger(item => {
      //  this actually wasted my time removes the last item on the last
        // const updatedList = item.slice()
        // console.log(updatedList)
        // updatedList.splice(index, 1)

        const updatedItems = item.filter((_, index) => index !== deleteIndex);

       item = [...updatedItems]

       return item

        
      })
    }
    
  }

  const updateItem = (index, formValues) => {
    // update the parent product items array from the child component
    items[index] = formValues

    let sum = items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);

    let sumTotal = sum - formField.discount
    
    triggerField({...formField, sum_total: sumTotal, invoice_prices: items})
  }

  const handleInput = (e) => {
    const {name, value} = e.target
    
    if(name == 'discount'){
      let newTotal = formField.sum_total - value
      triggerField({...formField, [name] : value, sum_total: newTotal})
    } else{
    triggerField({...formField, [name] : value})
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
  //  console.log(formField)

  }

  // used this to keep track of what i was doing
  // when developing
  // it helps so on would know what went wrong where.
  // useEffect(() => {
  //   console.log(formField)
  // }, [items])


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
              <h1 className="head_text blue_gradient sm:text-center">Start Sales</h1>
              <h1 className="text-[18px] font-bold mt-5 sm:text-[20px] sm:text-center">Fill out the invoice to start selling</h1>
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
              name="email"
              label="Customer Email"
              type="email"
              id="email"
              className='input mb-4'
             onChange={handleInput}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <TextField
                margin="normal"
                required
                fullWidth
                name="invoice_id"
                label="Invoice ID"
                type="number"
                id="invoice_id"
                className='input mb-4'
                onChange={handleInput}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="date"
                label="Invoice Date"
                type="date"
                id="invoice_date"
                className='input mb-4'
                value={formField.invoice_date}
                disabled
                />
            </div>

            {/* product fields */}
            <p className='mb-2 text-lg font-medium'>Product Details</p>

            {items.map((values, index) => {
              return (
              <InvoiceFields fields={values} key={index} index={index} remove={() => removeItem(index)} update={(index, formValues) => updateItem(index, formValues)}/>
              );
            })}

            <div className="flex gap-10 mx-auto w-fit">
            <div className="bg-green-500 w-fit py-1 px-2 text-sm text-white cursor-pointer mb-4" onClick={() => addItem()}>Add Product </div> 
            </div>

            <div className="flex flex-col">

            <div className="flex gap-10 text-xl">
            <TextField
                margin="normal"
                required
                fullWidth
                name="discount"
                label="Discount Amount"
                type="number"
                id="discount"
                className='input mb-4'
                onChange={handleInput}
              />
            </div>
            <div className="flex gap-10 text-xl">
              <div className="font-bold">Total</div>
              <div className="font-semibold">NGN {formField.sum_total}</div>
            </div>

            </div>


            

            <Button
              type="submit"
              fullWidth
              className="bg-orange-900"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>

          


        </div>
        
      </div>

      
      
    </>
  )
}


const InvoiceFields = ({fields, index, remove, update}) => {
  const [formValues, setFormValues] = useState(fields)

const removeItem = () => {
  if(remove){
  return remove
  }
}

const handleFormInput = (event) => {
  const { name, value } = event.target;

  // Create a new object with the updated property
  const updatedFormValues = {
    ...formValues,
    [name]: value,
  };

  // Calculate itemPrice based on the most recent form values
  const unitPrice = parseFloat(updatedFormValues?.unit_price) || 0;
  const quantity = parseFloat(updatedFormValues?.quantity) || 1;
  const itemPrice = unitPrice * quantity;

  // Update formValues state with the new values and calculated price
  setFormValues((prevFormValues) => ({
    ...prevFormValues,
    ...updatedFormValues,
    price: itemPrice,
  })); 
}; 

useEffect(()=>{
   // Check if formValues have changed before calling update
   if (update) {
    update(index, formValues);
  }
}, [formValues, update, index])

// Custom comparison function
const areObjectsEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

  return(
    <div>
      <div className="flex justify-between">
        <span>Item {index +1}</span>
        <span className='text-gray-600 cursor-pointer' onClick={removeItem(index)}>{index > 0 &&  'Remove'}</span>
        </div>
            <div className="grid grid-cols-2 gap-3">
            <TextField
                margin="normal"
                required
                fullWidth
                name="product_name"
                label="Product Name"
                type="text"
                id="product_name"
                className='input mb-4'
                onChange={handleFormInput}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="quantity"
                label="Quantity"
                type="number"
                id="quantity"
                className='input mb-4'
                onChange={handleFormInput}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
            <TextField
                margin="normal"
                required
                fullWidth
                name="unit_price"
                label="Unit Price"
                type="number"
                id="unit_price"
                className='input mb-4'
                onChange={handleFormInput}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Total Price"
                type="number"
                id="price"
                disabled
                className='input mb-4'
                value={formValues.price}
              />
            </div>
            <div className="border-b-2" />
            </div>
  )
}

export default Sales;