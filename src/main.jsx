// import 'dotenv/config'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style.js"


import { createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import {HomePage, Overview, Product, Pricing, NotFound, Dashboard, Register, Documentation, PasswordReset, PasswordConfirm, OtpConfirm, Gateway, LoginPage, Dashboard_new, Catalogue, Messaging, Profile, Sales, } from "./pages";
import Protector from "./components/Protector.jsx";
// import Gateway from "./pages/Gateway.jsx";
// leave for now



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />
  },
  {
    path: '/Sales',
    element: <Sales />
  },
  {
    path: '/Overview',
    element: <Overview />
  },
  {
    path: '/Pricing',
    element: <Pricing />
  },
  {
    path: '/Product',
    element: <Product />
  },
  {
    path: '/Documentation',
    element: <Documentation />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/OTP',
    element: <OtpConfirm />
  },
  {
    path: '/reset-password',
    element: <PasswordReset />
  },
  {
    path: '/password-confirmation',
    element: <PasswordConfirm />
  },
  {
    path: '/Dashboard_new',
    element: <Dashboard_new/>
  },
  {
    path: 'Catalogue',
    element: <Catalogue />
  },
  {
    path: 'Messaging',
    element: <Messaging />
  },
  {
    path: 'Profile',
    element: <Profile />
  },
  {
    path: '/dasher',
    element: <Protector component={Dashboard} />
  },
  {
    path: '/dashboard',
    element: <Protector component={Gateway} />,
    children: [{
      path: '',
      element: <Dashboard />
    }
    ]
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
      <Provider store={store} >
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
