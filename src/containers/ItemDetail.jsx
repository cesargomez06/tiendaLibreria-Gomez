import React from "react";
import {Link} from "react-router-dom";
// import Item from "../components/Item/Item";
import "../components/Item/item.css";
import ItemCount from "../components/itemCount";

const ItemDetail = ({ item, count }) => {
    const seAgrego = (num) => {console.log("Se agrego un item con", num, "productos")};
    return(
        <div className="container  bg-dark  p-4 card">
            
            <div className="container  col-md-8 card-body text-light   ">
                <h3 className="card-title font-weight-bold tipo-letra">{item.name}</h3>
                <p className="card-text">Descripción:{item.des}</p>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <img className="img-fluid col-md-6"src={item.img} alt={item.name}/>
            
            <ItemCount item={item} stock={item.stock} count={count} initial="1" onAdd={seAgrego}/>
            </div>
                
            <Link to="/" className=" container text-light m-2 text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-500 font-bold uppercase px-8 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1">
                <i className="fas fa-home" >  Home </i> 
            </Link>
            
            
            
        </div>
    );
};

export default ItemDetail;