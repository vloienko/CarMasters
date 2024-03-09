import './assets/scss/app.scss';

import { Link, Outlet } from 'react-router-dom';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';


function App() {

  return (
    <>
      <nav className="navbar-links">
        <Link to="/CarMasters/">Home</Link>
        <Link to="/CarMasters/contact">Contact</Link>
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