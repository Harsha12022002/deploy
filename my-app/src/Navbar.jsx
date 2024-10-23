import React from "react";
import { Link } from "react-router-dom";
const Navbar=(()=>{
    return(
        <div>
            <nav>
                <ul className="listt">
                    <li>
                        <Link to="#">Mobile</Link>
                    </li>
                    <li><Link to="/Pc">PC&Accesories</Link></li>
                    <li><Link to="#">Softwares</Link></li>
                    <li><Link to="#">Electronic-Gadget</Link></li>
                    <input type="text"  id="search" placeholder="serach_here"/>
                </ul>
                <button id="btn"></button>
            </nav>
        </div>
    )
})
export default Navbar