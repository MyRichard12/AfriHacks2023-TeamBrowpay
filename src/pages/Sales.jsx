import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from '../components';
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, textVariant } from '../utils/motion'

import { SalesPage } from '../components/landing/salespage';



const defaultTheme = createTheme();

function Sales() {
  
  return (
    <>
      <ThemeProvider theme={defaultTheme} />
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Navbar />
        <div className='mt-10' />
        <motion.div 
            className='w-full'
            variants={staggerContainer}
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
          <div className='mt-1'>
            <motion.div variants={textVariant(1.1)} >
              <h1 className="head_text blue_gradient sm:text-center">Start Sales</h1>
              <h1 className="text-[18px] font-bold mt-5 sm:text-[20px] sm:text-center">Fill out the invoice to start selling</h1>
            </motion.div>          
          </div>
        </motion.div>

        <SalesPage />
        
      </div>

      
      
    </>
  )
}


export default Sales;