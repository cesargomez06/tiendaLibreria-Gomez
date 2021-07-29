import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext} from "../../Context/CartContext"
import firebase from "firebase/app";
import "firebase/firestore"
import { getFirestore } from "../../firebase/firebase"


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
                    <h3 className="text-light">Carrito</h3>
                </div>
                <div className="carrito__listaContenedor">



                    {!cart.length ? <h2>No hay Items en el carrito<br /><Link to="/">Ir al Home</Link></h2>
                        : (
                            <>
                                {cart.map(cartItem =>
                                    <div key={cartItem.item.id}>

                                        <div >
                                            <div >
                                                <img width="150" src={cartItem.item.img} alt="Tapa" />
                                            </div>
                                            <div >
                                                <h3 className="text-light"> {cartItem.item.name} </h3>
                                                <p className="text-light" > {cartItem.item.des} </p>
                                                <button className="btn btn-primary" onClick={() => removeItem(cartItem.item.id)} > Eliminar </button>
                                            </div>

                                            <div >
                                                <p className="text-light" > {cartItem.quantity} </p>
                                            </div>
                                            <div >
                                                <h3 className="text-light"> ${cartItem.item.price} </h3>
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
                    <button className="btn btn-primary" onClick={clear}>Vaciar Carrito</button>
                </div>

                <div className="carrito__form">
                    <form action="#" className="">
                        <div>
                            <label className=
                            "text-light"

>
                                Nombre:
                                <input type="text" value={name} onInput={e => setName(e.target.value)}/>
                            </label>
                        </div>
                        <div>
                        <label className=
                            "text-light">
                                Telefono:
                                <input type="text" value={phone} onInput={e => setPhone(e.target.value)}/>
                            </label>
                        </div>
                        <div>
                        <label className=
                            "text-light">
                                Email:
                                <input type="email" value={email} onInput={e => setEmail(e.target.value)}/>
                            </label>
                        </div>
                    </form>

                </div>


                <div className="carrito__bottom flex flex-jc-c flex-ai-c">
                    <button className="btn btn-primary" onClick={generarOrden}>Finalizar Compra</button>
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
