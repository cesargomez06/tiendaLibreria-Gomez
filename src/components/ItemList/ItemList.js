import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Item from "../Item/Item";
import "./ItemList.css";
import { database } from "../../firebase/firebase";


const ItemList = ({items=[]}) => {
       

        
        
        
        const contexto = useContext(CartContext)

        const {carrito} = useContext(CartContext)
        
        
        
    return (
    <div className="row col md-4">
            
            {items.map(item => <Item item={item} key={item.id}/> )}
            
            
        
    </div>
   )
}

export default ItemList;