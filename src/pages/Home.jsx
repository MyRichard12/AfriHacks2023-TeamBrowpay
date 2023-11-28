// import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import styles from '../style';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import { About } from '../sections';
import Footer from '../components/Footer';


const defaultTheme = createTheme();
function HomePage() {
  return (
    <>
      <ThemeProvider theme={defaultTheme} />
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Navbar />
        <div className='mt-[50px]' />
        <Hero />
        <div className='mt-[20px]' />
        <About />
        <div className='mt-[100px]' />
        <Footer />
        <div className='mt-[50px]'/>
      </div>
    </>
  )
}

export default HomePage;