import React from 'react';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AddContent from './pages/AddContent';
import Navbar from './pages/Navbar';  

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> 
      <div>{children}</div> 
    </div>
  );
};

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Home /></Layout>,  
    },
    {
      path: '/addcontent',
      element: <Layout><AddContent /></Layout>,  
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
