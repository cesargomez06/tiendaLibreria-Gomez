import { Link } from "react-router-dom";
import "./item.css";



const Item = ({ item }) => {
    
    return (
        <div className="col-md-6 border border-primary align-middle contenedor ">
           
           <h3 className="text-light display-6 tipo-letra ">{item.nombre}</h3>
           <div >
            
            <img className="container-sm rounded col-md-8 " src={item.img} alt={item.nombre}/>
            
            <Link to={`/item/${item.id}` } className="ver-mas"> 
            Más info
            </Link>
            </div>
        </div>
        
    );
};

export default Item;