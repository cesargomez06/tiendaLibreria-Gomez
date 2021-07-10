import React from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../itemCount/index";

const Card = ({count}) => {
    
    const seAgrego = (num) => {console.log("Se agrego un item con", num, "productos")};
    
    return(
        <div className="container m-4 p-4">
            
            <div className="container col-md-8 ">
                
                <ItemCount stock={9} count={count} initial="1" onAdd={seAgrego} />
            </div> 
            <Link  to={"/contacto"}>
                <p class="text-warning">Ir a la pagina de contacto</p>
            </Link>
        </div>
    );
};

export default Card;