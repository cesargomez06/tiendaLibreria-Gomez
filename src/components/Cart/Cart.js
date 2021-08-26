import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../firebase/firebase";
import CartFinal from "./CartFinal.jsx";
import "./cart.css";

const Cart = () => {
  const { cart, removeItem, totalPrecio, clear } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const generarOrden = () => {
    const db = getFirestore();
    const ordersCol = db.collection("order");

    let orden = {};
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = {
      name: name,
      phone: phone,
      email: email,
    };
    orden.total = totalPrecio;
    orden.items = cart.map((cartItem) => {
      const id = cartItem.item.id;
      const desc = cartItem.item.desc;
      const nombre = cartItem.item.nombre;
      const cantidad = cartItem.quantity;
      const precio = cartItem.item.precio * cartItem.quantity;
      return { id, desc, nombre, cantidad, precio };
    });

    ordersCol.add(orden).then((IdDocumento) => {
      setOrdenId(IdDocumento.id);
    });

    clear();
  };

  return (
    <div>
      <div className="carrito_lista">
        <div className="carrito__header flex flex-jc-sb flex-ai-c">
          <h3 className="carrito__titulo">Carrito</h3>
        </div>
        <div className="carrito__listaContenedor">
          {!cart.length ? (
            <div className="home">
              <h2>No hay Items en el carrito</h2>
              <Link to="/">
                <button type="button" className="home fas btn btn-primary">
                  Volver a la tienda
                </button>
              </Link>
            </div>
          ) : (
            <>
              {cart.map((cartItem) => (
                <div key={cartItem.item.id}>
                  <div className="carrito__item flex flex-ai-c">
                    <div className="carrito__itemImagenDiv">
                      <img
                        src={cartItem.item.img}
                        alt="Tapa"
                        className="carrito__itemImagen"
                      />
                    </div>
                    <div className="carrito__itemDescripcion home">
                      <h3 className="carrito__itemTitulo">
                        {" "}
                        {cartItem.item.nombre}{" "}
                      </h3>
                      <p className="carrito__itemAutor">
                        {" "}
                        {cartItem.item.desc}{" "}
                      </p>
                      <button
                        onClick={() => removeItem(cartItem.item.id)}
                        className="carrito__productoEliminar fas home btn btn-primary"
                      >
                        {" "}
                        Eliminar{" "}
                      </button>
                    </div>

                    <div className="carrito__Cantidad flex flex-jc-c flex-ai-c">
                      <p className="carrito__itemCantidad">
                        {" "}
                        {cartItem.quantity}{" "}
                      </p>
                    </div>
                    <div class="carrito__itemPrecio">
                      <h3> ${cartItem.item.precio} </h3>
                    </div>
                  </div>
                </div>
              ))}
              <div className="carrito__total flex flex-jc-sb flex-ai-c">
                <div className="carrito__totalTitulo">
                  <h3>Total</h3>
                </div>

                <div className="carrito__totalCalculo">
                  <h2 className="carrito__totalCalculo--h">${totalPrecio}</h2>
                </div>
              </div>

              <div className="carrito__bottom flex flex-jc-c flex-ai-c home">
                <button
                  className="carrito__bottom Vaciar home fas btn btn-primary"
                  onClick={clear}
                >
                  Vaciar Carrito
                </button>
                <h3 className="mt-5">
                  Completa el formulario con tus datos para confirmar la compra
                </h3>
              </div>

              <div className="carrito__form">
                <form action="#" className="">
                  <div>
                    <label>
                      Nombre:
                      <input
                        type="text"
                        value={name}
                        onInput={(e) => setName(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Telefono:
                      <input
                        type="text"
                        value={phone}
                        onInput={(e) => setPhone(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Email:
                      <input
                        type="email"
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                </form>
                <div className="carrito__bottom flex flex-jc-c flex-ai-c">
                  <button
                    className="carrito__bottomCheckout botonCTA btn btn-success"
                    onClick={generarOrden}
                  >
                    Finalizar Compra
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {ordenId ? (
        <CartFinal name={name} ordenId={ordenId} email={email} />
      ) : null}
    </div>
  );
};

export default Cart;
