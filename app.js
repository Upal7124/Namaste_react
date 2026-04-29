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
                src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg"></img>
            </div>
            <div className="nav-c">
                <div className="nav-items">
                    <ul>
                        <li>Design</li>
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
                <button className="signUp-item">Sign Up</button>
            </div>
            <div className="login-c"> 
                <button className="login-item">Login</button>
            </div>
            </div>
        </div>
    )
};
const Ads=()=>{
    return (
        <>
        <div className="ads1-cont">
            <div className="ads1-vid">
            <video src="https://content-management-files.canva.com/fbd599e2-8bae-40e1-91a0-628a9182c09d/Recommended_DreamLab_Desktop2.mp4"
                    width="600"
                    autoPlay
                    loop
                    muted
                    playsInline>

            </video>
            </div>
            <div className="Overlay">
                <h2>Explore with canva</h2>
            </div>
        </div>
        <div className="ads2-cont">
            <img src="https://content-management-files.canva.com/3aefbd76-8499-4ee1-807f-9b2c901a3878/Recommended_BGremover_Desktop_2x.png" alt="Ad2"></img>
        </div>
        </>
    );
}
const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="canva-cont"></div>
            <Ads/>
        </div>
    );
}
const AppLayout=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout/>);