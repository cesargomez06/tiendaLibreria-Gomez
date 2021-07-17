import React, { useState, useEffect, Fragment } from "react";
// import {useParams} from "react-router-dom";
import products from "../mocks/product";
// import  itemsPromise   from "../mocks/product";
import ItemDetail from "./ItemDetail";



export default function ItemDetailContainer(props) {
    const [item, setItem] = useState([])
    
    const {id} = props.match.params

    useEffect(() => {
    const promesa = new Promise((resolve) =>
    
    setTimeout(() => {

        resolve (products.find((product) => product.id === parseInt(id)));
    }, 2000)
    );
    promesa.then((product) => {
    setItem(product);
    });
    },);
    

    return (
        <Fragment>
            
            <ItemDetail item={item} />
            
        </Fragment>
    );
}