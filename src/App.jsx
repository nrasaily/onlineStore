import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import About from './pages/About';
import Home from './pages/Home';
import Admin from './components/Admin';
import{ BrowserRouter, Routes, Route } from "react-router-dom"
import AdminDiscount from './components/Admindiscount';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className='main-content'>

        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/catalog" element={<Catalog></Catalog>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
        </Routes>          
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App
