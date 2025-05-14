import "./Catalog.css";
import Product from "../components/Product";
import DataService from '../services/DataService';
import { useEffect, useState } from "react";



function Catalog(){
    
    const [filter,setFilter] = useState('');
    const [allProducts, setAllproducts] = useState([]);
    const [allCats, setAllcats] = useState([]);


    async function loadProducts() {
            let allProds = await DataService.getCatalog();
            setAllproducts(allProds)
    }

    async function loadCategories(){
        let allCats = await DataService.getCategories();
        setAllcats(allCats)
    }
    //do something when the cmp loads


    useEffect(function() {
        loadProducts();
        loadCategories();
    }, []);

    return (
        <div className="catalog">
            <h1>Check out amazing catalog!</h1>

            
            <div className="filters">
                
                <button onClick={() => setFilter('')} className="btn btn-sm btn-dark">All</button>
                {/* map each category into a button */}
                {allCats.map(cat => <button onClick={() => setFilter(cat)} className='btn btn-sm btn-dark'>{cat}</button>)}
                
            </div>
            
            <div className="list">
                {allProducts.filter(prod =>prod.category == filter || !filter).map(prod => <Product data={prod} />)}
            </div>
        </div>
    );

}

export default Catalog;