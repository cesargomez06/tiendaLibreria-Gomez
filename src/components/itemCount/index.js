import React, {useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";

export function ItemCount ( { stock, count, setCount}) {
    
    /*useEffect(() => {
       setCount(parseInt(initial));
        return;
    }, [initial]);*/
    
    const sumar = () => {
        setCount (count + 1);
    };

    const restar = () => {
        setCount(count - 1);
    };
    
    
    

    

    return (
        <div className=" flex-column align-content-strech align-items-center ">
          <div className="m-2 p-2 d-flex flex-row justify-content-between  border-secondary border rounded ">
            <button
              disabled={count <= 1}
              className="btn btn-primary "
              type="button"
              onClick={restar}
            >
              -
            </button>
            <div>{count}</div>
            <button
              disabled={count >= stock}
              className="btn btn-primary "
              type="button"
              onClick={sumar}
            >
              +
            </button>
           
          </div>
          
          
        </div>
        
      );
    }
    
    export default ItemCount;