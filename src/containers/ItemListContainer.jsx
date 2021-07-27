import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import ItemList from "../components/ItemList/ItemList";
import products from "../mocks/product";
import { PacmanLoader } from "react-spinners";

const ItemListContainer = ({ greeting }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve,reject) => {
            setTimeout(() =>  {
                if (categoryId) {
                    const productsFilter = products.filter((product) => {
                        return product.category.toString() === categoryId;
                    });
                    resolve(productsFilter);
                } else resolve(products);
                resolve(products);
                setIsLoading(false)
                }, 2000);
            });
            promesa.then((resultado) => {
                setItems(resultado);
            });
        });
   
    
    return(
        <div className="container bg-dark " style={{display:""}} >
           <h1 className="neon" margin={2}>{greeting}</h1>
           {isLoading===true? <PacmanLoader margin={1} type={"PacmanLoader"}color={"#007bff"} size={35}/>:<ItemList  items={items}/>    }
                  
        </div>

    );
};

export default ItemListContainer;