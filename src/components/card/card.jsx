import React from "react";
import { ItemCount } from "../itemCount/index";

const Card = ({title,img, paragraph}) => {
    return(
        <div className="container">
            <h2>{title}</h2>
            <div className="container-img">
                <img className="img-fluid" width="300rem" alt="Responsive image" src={img}/>
            </div>
            <p>{paragraph}</p>
            <div className="container ">
                
                <ItemCount stock="6" initial="2" />
            </div> 
        </div>
    );
};

export default Card;