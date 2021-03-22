import * as React from "react";
import Card from "../components/card/card";
import ItemList from "../components/ItemList/ItemList";
import productList from "../mocks/productsList";


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        const myPromise = new Promise((resolve,reject) => {
            setTimeout(() => resolve(productList), 3000);
        });
        myPromise.then((result) => setProducts(result));
    }, []);
   
    
    return(
        <div style={{display:"flex"}} >
           

           <h1 className="neon">{greeting}</h1>
           <ItemList products={products}/>
           
           
        </div>

    );
};

export default ItemListContainer;