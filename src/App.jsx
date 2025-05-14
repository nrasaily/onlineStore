import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import About from './pages/About';
import Home from './pages/Home';
import Admin from './components/Admin';
import{ BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalProvider from './state/provider';
import Cart from './pages/Cart';



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";



function App() {
  

  return (

    <GlobalProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='main-content'>

          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/catalog" element={<Catalog></Catalog>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/admin" element={<Admin></Admin>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
          </Routes>          
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App
