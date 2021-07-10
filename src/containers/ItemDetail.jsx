import React from "react";
import {Link, useParams} from "react-router-dom";
import Item from "../components/Item/Item";
import Card from "../components/card/card";


const ItemDetail = ({ item }) => {
    
    return(
        <div>
            <p> {item.title}</p>
            <Link exact to="/">
            <button  Link exact to="/" className=" m-2 text-purple-500 bg-transparent border border-solid border-purple-500 hover:bg-purple-500 hover:text-white active:bg-purple-500 font-bold uppercase px-8 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1">
                <i className="fas fa-home" >  Home </i> 
            </button>
            
            </Link>
            
        </div>
    );
};

export default ItemDetail;