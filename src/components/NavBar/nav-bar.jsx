import React from "react";
import "./nav-bar.css";
import logoLibreria from "../../imagenes/logoLibreria.png";
import CartWidget from "../CartWidget/cart-widget";
import {categories} from "../../mocks/categories.json"
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
      <nav className="menu navbar navbar-expand-lg navbar-light">
      <a  href="/">
      <img className="menu-logo " src={logoLibreria} alt="logo de la libreria"/>
      </a>
      
      <div className="collapse navbar-collapse navbar-nav enlaces menu-enlaces" id="navbarNavAltMarkup">
      {categories.map((cat)=>(
        <NavLink
         to= {`/category/${cat.id}`}
         key={cat.id}
         className="nav-item nav-link ">
         {cat.title}
         </NavLink>
        ))}
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


