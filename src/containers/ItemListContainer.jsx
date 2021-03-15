import React from "react";
import Card from "../components/card/card";

const ItemListContainer = () => {
    return(
        <div style={{display:"flex"}}>
           <Card title="Agenda docente" img="./img/4.png" paragraph="Agenda docente para todes"/> 
           <Card title="Lapiz" img="./img/lapiz.png" paragraph="Lapiz de dibujo tecnico"/>
        </div>

    );
};

export default ItemListContainer;

