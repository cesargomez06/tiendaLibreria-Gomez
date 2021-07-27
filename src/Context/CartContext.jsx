import React,{ createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    
   

    const agregarAlCarrito = (item) => {
        
        setCarrito([...carrito, item])
    }
   
    const cantidadCarrito = () => {
        
        return carrito.map(({price}) => (console.log(price)) )
    }
    const totalCarrito = () => {
        return carrito.map(({price}) => (price * cantidadCarrito ))
    }

    return (
    <CartContext.Provider value={{carrito, agregarAlCarrito, totalCarrito, cantidadCarrito}}>
        {children}
    </CartContext.Provider>
    )
} 