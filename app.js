import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -nav
 *      -Home
 *      -About
 *      -Contact
 *  -login
 * Body
 *  -Flyers
 * Footer
 *  -Address
 *  -Copyright
 */
const Header=()=>{
    return (
        <div className="header">
            <div className="logo-c">
                <img className="logo"
                src="https://logopond.com/logos/6c9c73fccccfeb5bef34a822912c9c85.png"></img>
            </div>
            <div className="nav-c">
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="login-c"> 
                <button className="login-item">Login</button>
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout/>);