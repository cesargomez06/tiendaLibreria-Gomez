import React, {useState} from "react";
import "./nav-bar.css";


export const NavBar = () => {
    return (
        <div className="menu">
        
       <h2>Logo</h2>
        
        <nav className="menu-enlaces">
           
            <a href="">Artistica</a>
            <a href="">Escolar</a>
            <a href="">Comercial</a>
        </nav>
        <h1 className="neon">Tu librería online</h1>
        </div>
    
    );
};

export default NavBar;