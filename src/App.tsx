import React from 'react';

import "./App.css"


import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
 
} from "react-router-dom";

import ErrorURL from './components/ErrorURL';
import Catalog from './components/Catalog';
import DetailsCard from './components/DetailsCard';
import Login from './components/Login';


const Layout = () => {
  return (
    <>
    
      <Outlet/>
    
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      {
        path: "/",
        element: <Navigate to="/catalog" />
      },
      {
        path: "/catalog",
        element: <Catalog/>
      },
      {
        path: `/catalog/details/:id`,
        element: <DetailsCard />
      }
      
      
      
      
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "*",
    element:<ErrorURL/>
  },
  
]);

function App() {
 

  return (
    <div className="App">
     <RouterProvider router={router} /> 
    
    </div>
  );
}

export default App;
