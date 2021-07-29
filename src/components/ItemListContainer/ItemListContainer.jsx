import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import ItemList from "../ItemList/ItemList";
import { PacmanLoader } from "react-spinners";
import { getFirestore } from '../../firebase/firebase';

const ItemListContainer = ({ greeting }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([])
    const {categoryId} = useParams()

    

    useEffect(() => {

        const db = getFirestore();
        const itemsCollection = db.collection('productos');

        console.log(itemsCollection);

        const filtrado = categoryId? itemsCollection.where('category', '==', categoryId) : itemsCollection
        const prom =  filtrado.get();

        prom.then((snaptshot) => {
            console.log("Se consultaron los datos");
            console.log(snaptshot);

            if(snaptshot.size > 0){
                console.log(snaptshot.docs.map(doc => doc.data()));
                console.log(snaptshot.docs.map(doc => doc.id));
                setItems(snaptshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                }));
            }
            // setItems(resultado)
        })
    }, [categoryId]);
   
    
    return(
        <div className="container bg-dark " style={{display:""}} >
           <h1 className="neon" margin={2}>{greeting}</h1>
           {isLoading===false? <PacmanLoader margin={1} type={"PacmanLoader"}color={"#007bff"} size={35}/>:<ItemList  items={items}/>    }
           
        </div>

    );
};

export default ItemListContainer;