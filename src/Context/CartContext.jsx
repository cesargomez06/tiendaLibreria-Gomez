import React, { useState, useEffect} from 'react';

export const CartContext = React.createContext([]);

if (JSON.parse(localStorage.getItem('cart')) === null) {
	localStorage.setItem('cart', JSON.stringify([]))
}

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    useEffect(() => {

        let precio = 0;
        let totItems = 0;
        for (const cartItem of cart) {
            totItems += cartItem.quantity;
            precio += cartItem.quantity * cartItem.item.precio;
        }

        setTotalItems(totItems);
        setTotalPrecio(precio);

    }, [cart])

    
	const addItem = (item, quantity) => {
        localStorage.setItem('cart', JSON.stringify(cart))
		setCart(JSON.parse(localStorage.getItem('cart')))
		if (!isInCart(item.id)) {
			const newCart = [...cart, { item: item, quantity: quantity }];
			setCart(newCart);
		} else {
			setCart(
				cart.map((cartItem) => {
					if (cartItem.item.id === item.id) {
						return { ...cartItem, quantity:cartItem.quantity + quantity };
					} else {
						return cartItem;
					}
				})
			);
		}
        
	};


    
    const removeItem = (itemId) => {
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)		
    } // Remover un item del cart por usando su id
    
    const clear = () => {
        setCart([])
    }// Remover todos los items
    
    const isInCart = (id) => {
		return cart.findIndex((cartItem) => cartItem.item.id === id) >= 0 ? true : false;
	};


    return <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, totalItems, totalPrecio}}>
        {children}
    </CartContext.Provider>
}