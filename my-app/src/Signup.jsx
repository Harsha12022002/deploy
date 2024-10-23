import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const navigate=useNavigate();
    const handle=(()=>{
        props.setIsAuthenticated(true); 
        navigate("/home")
    })
    return (
        <div>
            <div id="sign-in">
                <div id="welcome-part">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please login with your personal info</p>
                </div>
                <div id="create-part">
                    <h1>Create Account</h1>
                    <div id="take">
                    <input type="text" placeholder="Name"/>
                    <input type="tel" placeholder="Phone"/>
                    <input type="mail" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button id="btn-create" onClick={handle}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
