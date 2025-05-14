import { useState } from "react";
import "./AdminProduct.css"
import { useEffect } from "react";
import DataService from "../services/DataService";

function AdminProduct(){

    const [allProducts, setAllproducts] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        category: ""

    });

    function handleInput(e){
        let text = e.target.value;
        let name = e.target.name;

        let copy = {...product};
        if(name=="title"){
            copy.title = text;
        }
        else if(name == "price"){
            copy.price = parseFloat(text);
        }
        if(name == "category"){
            copy.category = text;
        }
        if(name == "image"){
            copy.image= text;
        }
        setProduct(copy)
    }

    async function save(){
        console.log(product);
        let response = await DataService.saveProduct(product)
        console.log(response)

        let copy = [...allProducts];
        copy.push(product);
        setAllproducts(copy);
    }
    async function loadProds(){
        let prods = await DataService.getCatalog();
        setAllproducts(prods)
    }
    useEffect(function(){
        loadProds();
    }, []);
    
        
    
    return (

        <div className="adm-product my-form">
            <h3>Products</h3>
            <div className="field">
                <label className="form-label">Title:</label>
                <input onBlur={handleInput} name="title" type="text" className="form-control" />
            </div>

            <div className="field">
                <label className="form-label">Price:</label>
                <input onBlur={handleInput} name="price" type="text" className="form-control" />
            </div>

            <div className="field">
                <label className="form-label">Image</label>
                <input onBlur={handleInput} name="image" type="text" className="form-control" />
            </div>

            <div className="field">
                <label className="form-label">Category</label>
                <input onBlur={handleInput} name="category" type="text" className="form-control" />
            </div>



            <div className="controls">
                <button onClick={save} className="btn btn-dark">Save Product</button>
            </div>


            
            <ul className="form-list">
                {allProducts.map( prod => 
                <li key = {prod.title}>
                    <img src={prod.image} alt="" />
                    {prod.title}-${prod.price}
                    </li> )}
            </ul>
        </div>
    );
}

export default AdminProduct;