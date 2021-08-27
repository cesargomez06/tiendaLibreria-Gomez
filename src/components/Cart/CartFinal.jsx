import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
const CartFinal = function ({ name, ordenId, email }) {
  return (
    <div className="compra text-light">
      <div className="cerrar-modal ">
        <h4 className="unico">
          {name}, tu compra fue procesada correctamente.
        </h4>
        <h4>Tu número de orden es: {ordenId} </h4>
        <h4>Recibirás un correo en {email} con los detalles del envío.</h4>
        <Link to="/">
          <button class="close" className="volver">
            &times;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartFinal;
