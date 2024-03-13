import './assets/scss/app.scss';

import { Link, Outlet } from 'react-router-dom';

import Header from './components/_Layouts/Header/Header';
import Footer from './components/_Layouts/Footer/Footer';


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