import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import "../Item/item.css"
import ItemCount from "../itemCount";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ item }) => {

    

    const [count, setCount] = useState(0)
    
    const {addItem} = useContext(CartContext);

    const addHandler = (contador) => {
        addItem(item, contador);
        setCount(contador);
    };

    return(
        <div className="container bg-dark  p-4 card">
            
            <div className="container  col-md-8 card-body text-light  ">
                <h3 className="card-title font-weight-bold tipo-letra">{item?.nombre}</h3>
                
                <p className="card-text">Descripción: {item?.desc}</p>
                <div className="d-inline-flex">
                <p className="card-text m-2">Precio: ${item?.precio}</p>
                <p className="card-text m-2">Stock: {item?.stock}</p>
                </div>
                
                <div className="contador">
                <img className="img-fluid col-md-6"src={item?.img} alt={item.name}/>
                { count === 0 ? 
                <ItemCount initial={1} stock={item.stock} onAdd={addHandler} />
                :
                 <Link to="/cart" className="home">
                 <button className="agregar btn btn-primary"> Terminar mi compra </button>
                 </Link>
                }
                </div>
                
              
            </div>
                
            <Link to="/" className="home">
                <button type="button" className="fas btn btn-primary" >  Volver a inicio </button> 
            </Link>
            
        </div>
    );
};

export default ItemDetail;