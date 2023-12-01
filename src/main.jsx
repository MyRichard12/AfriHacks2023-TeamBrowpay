// import 'dotenv/config'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style.js"


import { createBrowserRouter, RouterProvider} from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import {HomePage, Overview, NotFound, Admin, Register, PasswordReset, PasswordConfirm, OtpConfirm, Gateway, LoginPage, Inventory, Profile, Sales, } from "./pages";
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
    path: '/sales',
    element: <Sales />
  },
  {
    path: '/Overview',
    element: <Overview />
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
    path: 'inventory',
    element: <Inventory />
  },
  {
    path: 'profile',
    element: <Profile />
  },
  {
    path: '/dasher',
    element: <Protector component={Admin} />
  },
  {
    path: '/dashboard',
    element: <Protector component={Gateway} />,
    children: [{
      path: '',
      element: <Admin />
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
