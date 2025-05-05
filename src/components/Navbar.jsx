import "./Navbar.css";
import{Link} from 'react-router-dom'

function Navbar(){

    return(
        <nav>
            <span className="title">CarDeal</span>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="/Admin">Admin</Link>
                
            </div>
        </nav>
    );
}



export default Navbar
