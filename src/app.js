import '.././index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Components/Body';
import BodyAfterLogin from './Components/BodyAfterLogin';
import Header from './Components/Header';
import Design from './Components/Design';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SignUp from './Components/SignUp';

/**
 * Header
 *  -logo
 *  -nav
 *      -Home
 *      -About
 *      -Contact
 *  -login
 * Body
 *  -Flyers
 * Footer
 *  -Address
 *  -Copyright
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: 'design',
        element: <Design />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
