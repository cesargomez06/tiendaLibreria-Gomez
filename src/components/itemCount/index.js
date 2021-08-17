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
          <div className="d-inline-flex p-2 m-2 justify-content-center border border-secondary align-items-center">
            <button disabled={count <= 1} className="btn btn-primary m-1" type="button" onClick={restar}> - </button>
            <div>{count}</div>
            <button disabled={count >= stock} className="btn btn-primary m-2" type="button"onClick={sumar}> + </button>
            <button disabled={count <= 0 || count > stock}  onClick={add} className="btn btn-primary m-2"> Agregar al carrito </button>
          </div>
          
          
        
        
      );
    }
    
    export default ItemCount;