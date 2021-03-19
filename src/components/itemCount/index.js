import React, {useEffect, useState } from "react";

export function ItemCount ( { stock, initial, onAdd, greeting}) {
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

    return (
        <div className=" flex-column align-content-strech">
          <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center border-secondary border rounded">
            <button
              disabled={count <= 0}
              className="btn btn-primary"
              type="button"
              onClick={removeHandle}
            >
              -
            </button>
            <div>{count}</div>
            <button
              disabled={count >= stock}
              className="btn btn-primary"
              type="button"
              onClick={addHandle}
            >
              +
            </button>
          </div>
          <button
            disabled={count <= 0}
            className="btn btn-primary w-75"
            type="button"
            onClick={onAdd,greeting}
            
          >
            Agregar al carrito
          </button>
        </div>
      );
    }
    
    export default ItemCount;