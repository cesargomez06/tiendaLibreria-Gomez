import React, {useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export function ItemCount ( { id, name, des, price, stock, initial, onAdd, item}) {
    const [count, setCount] = useState (parseInt(initial));
    useEffect(() => {
       setCount(parseInt(initial));
        return;
    }, [initial]);
    
    const addHandle = () => {
        setCount (count + 1);
    };

    const removeHandle = () => {
        setCount(count - 1);
    };
    
    const addTotal = () => {
      onAdd(count)
    }
    const {agregarAlCarrito,carrito} = useContext(CartContext)

    const handleAgregar = () => {
        agregarAlCarrito({
            name,
            price,
            id

        })
    }

    

    return (
        <div className=" flex-column align-content-strech align-items-center ">
          <div className="m-2 p-2 d-flex flex-row justify-content-between  border-secondary border rounded ">
            <button
              disabled={count <= 1}
              className="btn btn-primary "
              type="button"
              onClick={removeHandle}
            >
              -
            </button>
            <div>{count}</div>
            <button
              disabled={count >= stock}
              className="btn btn-primary "
              type="button"
              onClick={addHandle}
            >
              +
            </button>
          </div>
          <button
            
            disabled={count < 1}
            className="btn btn-primary w-50 ver-mas"
            type="button"
            onClick={addTotal}
            
          >
            Agregar al carrito
          </button>
          
        </div>
        
      );
    }
    
    export default ItemCount;