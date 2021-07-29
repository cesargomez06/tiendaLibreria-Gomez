import React, { useState, useEffect, Fragment } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PacmanLoader } from "react-spinners";
import {getFirestore} from '../../firebase/firebase';
import { useParams } from "react-router-dom";

const getItems = (id) => {
    const db = getFirestore();
    const itemsCollection = db.collection("productos")

    const item = itemsCollection.doc(id)
    return item.get();
}


const ItemDetailContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState([])
    const { itemId } = useParams()

    useEffect(()=> {
        getItems(itemId)
        .then((res) => {
            console.log('existe?', res.exists);
            if (res.exists){
                setItem(res.data())
                        }

        })
    }, []);
    
    

    return (
        <Fragment>
            {isLoading===false? <PacmanLoader type={"PacmanLoader"} color={"#007bff"} size={40}/>:  
            <ItemDetail item={{id: itemId, ...item}}  />}
        </Fragment>
    );
}
export default ItemDetailContainer;