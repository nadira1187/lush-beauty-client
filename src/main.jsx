import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/root/Root';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AddProduct from './components/addProduct/AddProduct';
import MyCart from './components/mycart/MyCart';
import AuthProvider from './components/provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct> ,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart> ,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>  
      <RouterProvider router={router} />
    </AuthProvider>
    

  </React.StrictMode>,
)
