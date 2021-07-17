import { Link } from "react-router-dom";
// import ItemDetailContainer from "../../containers/ItemDetailContainer";
// import products from "../../mocks/product";
// import product from "../../mocks/product";
// import Card from "../card/card";
import "./item.css";



const Item = ({ item }) => {
    
    return (
        <div className="container-fluid mb-2 pt-2 pl-0 pr-0 col-md-4 border border-primary">
            <h3>{item.name}</h3>
            <p>Precio: {item.price}</p>
            <p>Stock: {item.stock}</p>
            <img className="img-fluid col-md-6"src={item.img} alt={item.name}/>
            
            <Link to={`/item/${item.id}` } className="btn btn-primary"> 
            ver mas
            </Link>
            
        </div>
        
    );
};

export default Item;