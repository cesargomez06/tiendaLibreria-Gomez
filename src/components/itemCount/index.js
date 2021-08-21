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
          <div className="home d-inline-flex p-2 m-2 justify-content-center border border-secondary align-items-center">
            <button disabled={count <= 1} className="sumaResta" type="button" onClick={restar}> - </button>
            <div>{count}</div>
            <button disabled={count >= stock} className="sumaResta" type="button" onClick={sumar}> + </button>
            <button disabled={count <= 0 || count > stock} type="button" onClick={add} className="agregar btn btn-primary"> Agregar al carrito </button>
          </div>
          
          
        
        
      );
    }
    
    export default ItemCount;