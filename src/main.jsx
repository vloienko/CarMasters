import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './style.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { ContactUs } from './pages/ContactUs.jsx';


const router = createBrowserRouter([
  {
    path: "/CarMasters/",
    element: <App />,
    children: [
      {
        path: "/CarMasters/",
        element: <Home />,
      },
      {
        path: "/CarMasters/contact-us",
        element: <ContactUs />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)