import "./Catalog.css";
import Product from "../components/Product";
import {mock_catalog, mock_categories} from '../services/DataService';
import { useState } from "react";



function Catalog(){
    
    const [filter,setFilter] = useState('');

    return (
        <div className="catalog">
            <h1>Check out amazing catalog!</h1>

            
            <div className="filters">
                
                <button onClick={() => setFilter('')} className="btn btn-sm btn-dark">All</button>
                {/* map each category into a button */}
                {mock_categories.map(cat => <button onClick={() => setFilter(cat)} className='btn btn-sm btn-dark'>{cat}</button>)}
                
            </div>
            
            <div className="list">
                {mock_catalog.filter(prod =>prod.category == filter || !filter).map(prod => <Product data={prod} />)}
            </div>
        </div>
    );
s
}

export default Catalog;