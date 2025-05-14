import "./Admin.css";
import AdminDiscount from "./Admindiscount";
import AdminProduct from "./AdminProduct"

function Admin(){

    return(

        <div className="admin">
            
            <h1>
                <i class="fa-solid fa-toolbox"></i>
                Store Administration
            </h1>
            <div className="parent">
                <AdminProduct/>
                <AdminDiscount/>
            </div>
        </div>

    )

    
}

export default Admin;
