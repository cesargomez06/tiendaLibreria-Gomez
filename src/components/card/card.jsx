import React from "react";
import { ItemCount } from "../itemCount/index";

const Card = ({count}) => {
    
    const seAgrego = (num) => {console.log("Se agrego un item con", num, "productos")};
    
    return(
        <div className="container m-4 p-4">
            
            <div className="container col-md-8 ">
                
                <ItemCount stock={9} count={count} initial="1" onAdd={seAgrego} />
            </div> 
        </div>
    );
};

export default Card;