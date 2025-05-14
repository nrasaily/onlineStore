import { useContext } from "react";
import "./Navbar.css";
import{Link} from 'react-router-dom'
import DataContext from "../state/DataContext";
import Cart from "../pages/Cart";

function Navbar(){

    let user = useContext(DataContext).user;
    let cart = useContext(DataContext).cart;

    return(
        <nav>
            <span className="title">CarDeal</span>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="/Admin">Admin</Link>

                
                
            </div>
            <label className="btn btn-outline-light btn-user">
                <i className="fa-solid fa-user-minus"></i>
                    {user.userName}
            </label>

            <Link to="Cart" className="btn btn-outline-light btn-cart">
                {cart.length}
                view cart
            </Link>
        </nav>
    );
}



export default Navbar

/****
 * create a cart page
 * with h1 ready to complete your order
 * 
 * register a route for it, use /cart
 * 
 * change the view cart label to the link that points to the cart page
 * 
 * 
*/