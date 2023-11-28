import React from 'react'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from '../components';


const defaultTheme = createTheme();
function Documentation() {
  return (
    <>
      <ThemeProvider theme={defaultTheme} />
      <div className="main">
        <div className="gradient" />
      </div>

      <div className="app">
        <Navbar />
      </div>
    </>
  )
}

export default Documentation