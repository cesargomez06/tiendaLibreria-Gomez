import React, { useState } from "react";
import "../Item/item.css";

export function ItemCount ( { stock, initial, onAdd}) {
    
   
    const [count, setCount] = useState(initial);

    const restar = () => {

      setCount(count-1)
  }
  const sumar = () => {
      if (count >= stock){
          return
      }
      setCount(count+1) 
  }
  const add = () => {
      onAdd(count)
  }
    
    

    

    return (
        <div className="contador flex-column align-content-strech align-items-center container ">
          <div className="m-2 p-2 d-flex flex-row justify-content-between  border-secondary border rounded align-items-center">
            <button disabled={count <= 1} className="btn btn-primary " type="button" onClick={restar}> - </button>
            <div>{count}</div>
            <button disabled={count >= stock} className="btn btn-primary"type="button"onClick={sumar}> + </button>
            <button disabled={count <= 0 || count > stock}  onClick={add} className="btn btn-primary "> Agregar al carrito </button>
          </div>
          
          
        </div>
        
      );
    }
    
    export default ItemCount;