import Item from "../Item/Item";
import "./ItemList.css";



const ItemList = ({items = []}) => {
        
    return (
    <div className="row col md-4">
            
            {items.map(item => <Item item={item} key={item.id}/> )}
        
    </div>
   )
}
export default ItemList;