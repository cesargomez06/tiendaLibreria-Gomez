import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
// import Item from "../components/Item/Item";
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
                <p className="card-text">Descripción:{item?.desc}</p>
                <p className="card-text">Precio: ${item?.precio}</p>
                <p className="card-text">Stock: {item?.stock}</p>
                <div className="d-flex-rap align-items-center">
                <img className="img-fluid col-md-6"src={item?.img} alt={item.name}/>
                { count === 0 ? 
                <ItemCount className="contador"initial={1} stock={5} onAdd={addHandler} />
                :
                 <Link to="/cart">
                 <button className="btn btn-primary"> Terminar mi compra </button>
                 </Link>
                }
                </div>
                
              
            </div>
                
            <Link to="/" className=" container text-light m-2 text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-500 font-bold uppercase px-8 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1">
                <i className="fas fa-home" >  Home </i> 
            </Link>
            
        </div>
    );
};

export default ItemDetail;