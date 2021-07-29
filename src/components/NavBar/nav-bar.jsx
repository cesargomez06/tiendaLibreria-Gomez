import React from "react";
import "./nav-bar.css";
import logoLibreria from "../../imagenes/logoLibreria.png";
import CartWidget from "../CartWidget/cart-widget";

import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
      <nav className="menu navbar navbar-expand-lg navbar-light">
      <a  href="/">
      <img className="menu-logo " src={logoLibreria} alt="logo de la libreria"/>
      </a>
      
      <div className="collapse navbar-collapse menu  menu-enlaces" id="navbarNavAltMarkup">
      <ul>
          <NavLink to="/">
            <li>Inicio</li>
          </NavLink>
          <NavLink to="/category/escolar">
            <li>Librería Escolar</li>
            </NavLink>
          <NavLink to="/category/artistica">
            <li>Libreria artistica</li>
            </NavLink>
          <NavLink to="/category/juguetes">
            <li>Juguetes</li>
            </NavLink>
          <NavLink to="/contacto">
            <li>Contacto</li>
            </NavLink>
          <NavLink to="/cart">
            <CartWidget />
            </NavLink>
        </ul>
     
      </div>
      
      

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


