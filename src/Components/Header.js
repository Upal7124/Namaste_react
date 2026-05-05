import { useState } from "react";
import BodyAfterLogin from "./BodyAfterLogin";
import SignUp from "./SignUp";
import Body from "./Body";
import { Link } from "react-router-dom";
const Header=({setIsLoggedIn})=>{
   
    return (
        <div className="header">
            <div className="logo-c">
                <img className="logo"
                src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"/>
            </div>
            <div className="nav-c">
                <div className="nav-items">
                    <ul>
                        <li>
                            <Link to="/Design">Design</Link>
                        </li>
                        <li>Product</li>
                        <li>Plan</li>
                        <li>Business</li>
                        <li>Education</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="login-signUp">
            <div className="signUp-c"> 
                <button className="signUp-item"><Link to="/SignUp">
                    Sign Up
                    </Link>
                </button>
            </div>
            <div className="login-c"> 
                <button 
                className="login-item"
                >Login</button>
                
            </div>
            </div>
        </div>
    )
};
export default Header;