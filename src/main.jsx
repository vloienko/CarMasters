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
import { About } from './pages/About.jsx';
import { LoanRates } from './pages/LoanRates.jsx';
import { Catalog } from './pages/Catalog.jsx';


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
        path: "/CarMasters/about",
        element: <About />,
      },
      {
        path: "/CarMasters/loan-rates",
        element: <LoanRates />,
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

      
      {
        path: "/CarMasters/catalog",
        element: <Catalog />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)