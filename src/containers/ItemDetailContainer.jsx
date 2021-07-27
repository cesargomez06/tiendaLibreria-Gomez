import React, { useState, useEffect, Fragment } from "react";
// import {useParams} from "react-router-dom";
import products from "../mocks/product";
// import  itemsPromise   from "../mocks/product";
import ItemDetail from "./ItemDetail";
import { PacmanLoader } from "react-spinners";


export default function ItemDetailContainer(props) {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const {id} = props.match.params

    const [count, setCount] = useState (1);

    useEffect(() => {
    const promesa = new Promise((resolve) =>
    
    setTimeout(() => {
        
        resolve (products.find((product) => product.id === parseInt(id)));
        setIsLoading(false)
    }, 2000)
    
    );
    promesa.then((product) => {
    setItem(product);
    });
    },);
    

    return (
        <Fragment>
            {isLoading===true? <PacmanLoader type={"PacmanLoader"} color={"#007bff"} size={40}/>:<ItemDetail item={item} count={count} setCount={setCount} />}
        </Fragment>
    );
}