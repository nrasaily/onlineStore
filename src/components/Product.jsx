import "./Product.css";
import QuantityPicker from "./QuantityPicker";


function Product(props){

    function Add() {
        console.log("adding product")
    }

    return(
        <div className="product">

            <img src={props.data.image} />

            <h3>{props.data.title}</h3>

            <div className="prices"> 
                <label className="total">Totol: ${props.data.price.toFixed(2)}</label>
            
                <label className="price">Price: ${props.data.price.toFixed(2)}</label>
            </div>

            <div className="controls">
                <QuantityPicker></QuantityPicker>
                <button className="btn btn-sm btn-success" onClick={Add}>
                <i class="fa-solid fa-cart-plus iCart"></i>
                </button>
            </div>
        </div>
        
    );

}

export default Product;

