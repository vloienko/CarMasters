import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './style.scss';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { ContactUs } from './pages/ContactUs.jsx';
import { Calculator } from './pages/Calculator.jsx';
import { TermsConditions } from './pages/TermsConditions.jsx';
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx';
import { OurBlog } from './pages/OurBlog.jsx';


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
        path: "/CarMasters/calculator",
        element: <Calculator />,
      },
      {
        path: "/CarMasters/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/CarMasters/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/CarMasters/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/CarMasters/blog",
        element: <OurBlog />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)