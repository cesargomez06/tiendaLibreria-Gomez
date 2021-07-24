import React,{ createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) => {
        
        setCarrito([...carrito, item])
    }

    return <CartContext.Provider value={{carrito, agregarAlCarrito}}>

        {children}

    </CartContext.Provider>
} 