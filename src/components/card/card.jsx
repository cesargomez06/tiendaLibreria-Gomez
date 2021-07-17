import React from "react";
import { ItemCount } from "../itemCount/index";



const Card = ({count}) => {
    
    const seAgrego = (num) => {console.log("Se agrego un item con", num, "productos")};
    
    return(
        <div>
            
            <div className="container">
            <ItemCount stock={9} count={count} initial="1" onAdd={seAgrego}/>
            </div> 
            
        </div>
    );
};

export default Card;