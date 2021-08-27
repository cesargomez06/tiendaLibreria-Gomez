import React, {useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import ShoppingCart from '../CartWidget/shopping-cart.png';
import "../NavBar/nav-bar.css"


export const CartWidget = () => {

    const {totalItems} = useContext(CartContext)


    return (
        <div className="menu">
            
        <img src={ShoppingCart} alt="Carrito" className="menu-carrito" />
        {totalItems ? <span> ({totalItems})</span> : null }

        </div>
    
    );
};

export default CartWidget;