import { useState } from "react";
import "./AdminDiscount.css";

function AdminDiscount(){
    const [allCoupons, SetAllcoupons] = useState([])

    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    }); 

function handleInput(e){
    let text = e.target.value;
    let name = e.target.name;



        /*
        create a copy of the state var
        modify the copy
        set the copy back
        */ 

    let copy = { ...coupon}
    if(name == "code") {
        
        /*let copy = { ...coupon }*/
        copy.code = text;
        /*setCoupon(copy);*/
    }
    else if (name == "discount"){
        /*let copy = { ...coupon}*/
        copy.discount = text;
        /*setCoupon(copy)*/
    }
    setCoupon(copy);
}

function save(){
    console.log(coupon)
    /* 3 steps*/ 
    let copy = [...allCoupons]
    copy.push(coupon);
    SetAllcoupons(copy);
}

    return(
        <div className="adm-discount my-form">
            <h3>Discounts</h3>

            <div className="field"> 
                <label className="form-label">code:</label>
                <input onBlur={handleInput} name="code" type="text" className="form-control" />
            </div>
        

            <div className="field"> 
                <label className="form-label">Discount:</label>
                <input onBlur={handleInput} name="discount" type="number" className="form-control" />
            </div>

            <div className="controls">
                <button onClick={save} className="btn btn-dark">Save discount</button>

            </div>

            <ul className="form-list">
                {allCoupons.map( cp => <li>{cp.code} - {cp.discount}</li>)}
            </ul>
            
        </div>
    );
}

export default AdminDiscount;