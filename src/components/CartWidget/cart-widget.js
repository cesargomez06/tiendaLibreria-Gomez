import React, {useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import ShoppingCart from '../CartWidget/shopping-cart.png';
import "../NavBar/nav-bar.css"


export const CartWidget = () => {

    const {cantidadCarrito, totalCarrito} = useContext(CartContext);


    return (
        <div className="menu">
            
            <img src={ShoppingCart} className="menu-carrito" alt="Menu"/>
            <p> Cantidad: {cantidadCarrito()}</p>
            <p>Total: ${totalCarrito()}</p>
            
        </div>
    
    );
};

export default CartWidget;