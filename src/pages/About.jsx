import "./About.css"
import { useState } from "react";

function About(){

    const [showEmail, setShowEmail] = useState(false);

    function displayEmail(){
        setShowEmail(true)
    }

    return(
        <div className="about">

            
                <img className="picture" src="/images/cartoon.jpg" alt="" />

                <h2>Nar Always</h2>

                { showEmail == true ? <h5>Naralways@gmail.com</h5> : null }

                <button className="btn btn-dark" onClick={displayEmail}>See my email</button>
            


        </div>
    );
}

export default About;