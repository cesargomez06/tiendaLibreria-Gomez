import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import products from "../mocks/product";
import  itemsPromise   from "../mocks/product";
import ItemDetail from "./ItemDetail";
import item from "../components/Item/Item";


export default function ItemDetailContainer() {
    const [item, setItem] = useState([])
    
    const {itemId} = useParams()

    useEffect(() => {
    const promesa = new Promise((resolve) =>
    
    setTimeout(() => {

        resolve (products.find((product) => product.id === parseInt(itemId)));
    }, 2000)
    );
    promesa.then((product) => {
    setItem(product);
    });
    },);

    return (
        <fragment>
            <h2 className="text-4xl text-center text-amber-500"> Este es el Item {itemId}</h2>
            <ItemDetail item={item} />
            
        </fragment>
    );
}