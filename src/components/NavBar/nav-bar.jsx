import React, {useState} from "react";
import "./nav-bar.css";
import logoLibreria from "../../imagenes/logoLibreria.png";
import CartWidget from "../CartWidget/cart-widget";



export const NavBar = () => {
    return (
      <nav className="menu navbar navbar-expand-lg navbar-light">
      <a  href="/">
      <img class="menu-logo" src={logoLibreria}/>
      </a>
      
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav enlaces menu-enlaces">
          <a className="nav-item nav-link active" href="/">
            Escolar
          </a>
          <a className="nav-item nav-link" href="/">
            Comercial
          </a>
          <a className="nav-item nav-link" href="/">
            Artistica
          </a>
        </div>
      </div>
      <CartWidget />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </nav>
        
      
        
    );
   
};

export default NavBar;


