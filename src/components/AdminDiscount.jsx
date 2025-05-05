import "./AdminDiscount.css";

function AdminDiscount(){
    return(
        <div className="adm-discount">
            <h3>Discounts</h3>

            <div className="field"> 
                <label htmlFor="" className="form-label">code</label>
                <input type="text" className="form-control" />
            </div>
        </div>
        
    );
}

export default AdminDiscount;