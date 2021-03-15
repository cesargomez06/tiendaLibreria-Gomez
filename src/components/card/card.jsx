import React from "react";


const Card = ({title,img, paragraph}) => {
    return(
        <div className="container">
            <h2>{title}</h2>
            <div className="container-img">
                <img class="img-fluid" width="300rem" alt="Responsive image" src={img}/>
            </div>
            <p>{paragraph}</p>
        </div>
    );
};

export default Card;