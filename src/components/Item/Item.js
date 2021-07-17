import { Link } from "react-router-dom";
// import ItemDetailContainer from "../../containers/ItemDetailContainer";
// import products from "../../mocks/product";
// import product from "../../mocks/product";
// import Card from "../card/card";
import "./item.css";



const Item = ({ item }) => {
    
    return (
        <div className="col-md-6 border border-primary align-middle contenedor ">
           
           <h3 className="text-light display-6 tipo-letra ">{item.name}</h3>
           <div >
            
            <img className="container-sm rounded col-md-8 " src={item.img} alt={item.name}/>
            
            <Link to={`/item/${item.id}` } className="ver-mas"> 
            Más info
            </Link>
            </div>
        </div>
        
    );
};

export default Item;