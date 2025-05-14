import { useContext, useState } from "react";
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import DataContext from "../state/DataContext";


function Product(props){
    const [quantity, setQuantity] = useState(1);

    const addProductTocart = useContext(DataContext).addProductTocart;

    function Add() {
        console.log("adding product")

        let prodForCart = {...props.data, quantity};
        //prodForCart.quantity = quantity;
        addProductTocart(prodForCart);

    }

    function handleQuantity(qty){
        console.log("the quantity has changed!", qty)
        setQuantity(qty);
    }

    function getTotal(){
        let total = quantity * props.data.price;
        return total.toFixed(2);
    }
    
    return(
        <div className="product">

            <img src={props.data.image} />

            <h3>{props.data.title}</h3>

            <div className="prices"> 
                <label className="total">${(quantity * props.data.price)}</label>
            
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>

            <div className="controls">
                <QuantityPicker onChange={handleQuantity}></QuantityPicker>
                <button className="btn btn-sm btn-success" onClick={Add}>
                <i class="fa-solid fa-cart-plus iCart"></i>
                Add
                </button>
            </div>
        </div>
        
    );

}

export default Product;

