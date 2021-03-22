import Card from "../card/card";
import "./item.css";
const Item = ({product}) => {
    return (
        <div className="container col-md-10 border border-primary">
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <img className="img-fluid col-md-4"src={product.img}/>
            <Card />
        </div>
        
    );
};

export default Item;