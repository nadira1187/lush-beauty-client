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
import ProductList from './components/productList/ProductList';
import ErrorPage from './components/error/ErrorPage';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Details from './components/details/Details';
import UpdateProduct from './components/updateCart/UpdateProduct';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/addproduct",
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>  ,
      },
      {
        path: "/mycart",
        element:<PrivateRoute> <MyCart></MyCart></PrivateRoute> ,
      },
      {
        path: "/login",
        element: <Login></Login> ,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/productList/:brand",
        element: <ProductList></ProductList>,
        loader:({params}) => fetch(`https://lush-beauty-server-m0luoj990-nadira1187.vercel.app/product/${params.brand}`),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute> ,
        loader:({params}) => fetch(`https://lush-beauty-server-m0luoj990-nadira1187.vercel.app/products/${params.id}`),
      },
      {
        path: "/updateProducts/:id",
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute> ,
        loader:({params}) => fetch(`https://lush-beauty-server-m0luoj990-nadira1187.vercel.app/products/${params.id}`),
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
