import React from "react";
import ShoppingCart from '../CartWidget/shopping-cart.png';
import "../NavBar/nav-bar.css"


export const CartWidget = () => {
    return (
        <div className="menu">
        
            <img src={ShoppingCart} className="menu-carrito" alt="Menu"/>
            
        </div>
    
    );
};

export default CartWidget;