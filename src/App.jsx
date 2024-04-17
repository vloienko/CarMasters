import './assets/scss/app.scss';

import { Link, Outlet } from 'react-router-dom';

import Header from './components/_Layouts/Header/Header';
import Footer from './components/_Layouts/Footer/Footer';


function App() {

  return (
    <>
      <nav className="navbar-links">
        <Link to="/CarMasters/">Home</Link>
        <Link to="/CarMasters/calculator">Calculator</Link>
        <Link to="/CarMasters/videos">Vehicle Videos</Link>
        <Link to="/CarMasters/about">About</Link>
        <Link to="/CarMasters/loan-rates">Loan Rates</Link>
        <Link to="/CarMasters/contact-us">Contact us</Link>
        <Link to="/CarMasters/terms-conditions">Terms Conditions</Link>
        <Link to="/CarMasters/privacy-policy">Privacy Policy</Link>
        <Link to="/CarMasters/blog">Our blog</Link>

        <Link to="/CarMasters/catalog">Catalog</Link>
        <Link to="/CarMasters/quiz">Quiz</Link>
      </nav>
      

      <div className="App">
        <div className="wrapper">
          <Header />

          <main className="page">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;