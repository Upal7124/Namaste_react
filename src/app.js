import '.././index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './Components/Body';
import BodyAfterLogin from './Components/BodyAfterLogin';
import GuestHeader from './Components/GuestHeader';
import Design from './Components/Design';
import UserHeader from './Components/UserHeader';
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
      <UserHeader />
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
      {
        path: 'body',
        element: <Body />,
      },
      {
        path: 'bodyafterlogin',
        element: <BodyAfterLogin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
