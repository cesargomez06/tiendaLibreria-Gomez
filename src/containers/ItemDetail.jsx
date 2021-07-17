import React from "react";
import {Link} from "react-router-dom";
// import Item from "../components/Item/Item";
import Card from "../components/card/card";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemDetail = ({ item }) => {
    
    return(
        <div className="container m-4 p-4 card">
            
            <div className="container col-md-8 card-body">
                <h3 className="card-title font-weight-bold">{item.name}</h3>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <img className="img-fluid col-md-6"src={item.img} alt={item.name}/>
            <Card/>
            </div>
                
            <Link to="/" className=" m-2 text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-500 font-bold uppercase px-8 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1">
                <i className="fas fa-home" >  Home </i> 
            </Link>
            
            
            
        </div>
    );
};

export default ItemDetail;