import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext} from "../../Context/CartContext"
import firebase from "firebase/app";
import "firebase/firestore"
import { getFirestore } from "../../firebase/firebase"
import "./cart.css";


const Cart = () => {


    const { cart, removeItem, totalPrecio, clear } = useContext(CartContext)

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [ordenId, setOrdenId] = useState('');


    const generarOrden = () => {

        const db = getFirestore();
        const ordersCol = db.collection("productos");

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());
        orden.buyer = {
            name: name,
            phone: phone,
            email: email
        }
        orden.total = totalPrecio
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const des = cartItem.item.des;
            const autor = cartItem.item.autor;
            const cantidad = cartItem.quantity;
            const precio = cartItem.item.precio * cartItem.quantity;
            return { id, des, autor, cantidad, precio }
        })

        ordersCol.add(orden)
            .then((IdDocumento) => {
                setOrdenId(IdDocumento.id);
                // mostrarOrden();
            })

        clear();  
        
    }

    // let ordenStatus = false;
    
    // const mostrarOrden = () => {
    //     ordenStatus = true
    // }



    return (
        <div>
        <div className="carrito_lista">
            <div className="carrito__header flex flex-jc-sb flex-ai-c">
                <h3 className="carrito__titulo">Carrito</h3>
            </div>
            <div className="carrito__listaContenedor">



                {!cart.length ? <h2>No hay Items en el carrito<br /><Link to="/">Ir al Home</Link></h2>
                    : (
                        <>
                            {cart.map(cartItem =>
                                <div key={cartItem.item.id}>

                                    <div className="carrito__item flex flex-ai-c">
                                        <div className="carrito__itemImagenDiv">
                                            <img src={cartItem.item.img} alt="Tapa" className="carrito__itemImagen" />
                                        </div>
                                        <div className="carrito__itemDescripcion">
                                            <h3 className="carrito__itemTitulo"> {cartItem.item.nombre} </h3>
                                            <p className="carrito__itemAutor"> {cartItem.item.desc} </p>
                                            <button onClick={() => removeItem(cartItem.item.id)} className="carrito__productoEliminar btn btn-primary"> Eliminar </button>
                                        </div>

                                        <div className="carrito__Cantidad flex flex-jc-c flex-ai-c">
                                            <p className="carrito__itemCantidad"> {cartItem.quantity} </p>
                                        </div>
                                        <div class="carrito__itemPrecio">
                                            <h3> ${cartItem.item.precio} </h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
            </div>



            <div className="carrito__total flex flex-jc-sb flex-ai-c">
                <div className="carrito__totalTitulo">
                    <h3>Total</h3>
                </div>

                <div className="carrito__totalCalculo">
                    <h2 className="carrito__totalCalculo--h">${totalPrecio}</h2>
                </div>
            </div>

            <div className="carrito__bottom flex flex-jc-c flex-ai-c">
                <button className="carrito__bottomVaciar boton btn btn-primary" onClick={clear}>Vaciar Carrito</button>
            </div>

            <div className="carrito__form">
                <form action="#" className="">
                    <div>
                        <label>
                            Nombre:
                            <input type="text" value={name} onInput={e => setName(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                    <label>
                            Telefono:
                            <input type="text" value={phone} onInput={e => setPhone(e.target.value)}/>
                        </label>
                    </div>
                    <div>
                    <label>
                            Email:
                            <input type="email" value={email} onInput={e => setEmail(e.target.value)}/>
                        </label>
                    </div>
                </form>

            </div>


            <div className="carrito__bottom flex flex-jc-c flex-ai-c">
                <button className="carrito__bottomCheckout botonCTA btn btn-success" onClick={generarOrden}>Finalizar Compra</button>
            </div>
        </div>

        {ordenId ?             
            <div>
                {name}, tu compra por un total de ${totalPrecio}.- fue procesada correctamente.<br/>
                Tu numero de orden es: {ordenId} <br/>
                Recibiras un correo en {email} con los detalles del envio.
            </div>
            : null
        }
    </div>
)

}

export default Cart;
