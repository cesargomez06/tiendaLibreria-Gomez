import React from 'react'
import "./contacto.css"

export default function Contacto() {
    return (
        <form className="formulario">
            <h3>Contactanos</h3>
        <label className="label" type="text">
          Nombre y apellido:
          <input type="text" name="name" />
        </label>
        <label className="label" type="text">
          Pais:
          <input type="text" name="pais" />
        </label>
        <label className="label" type="text">
          Provincia:
          <input type="text" name="provincia"/>
        </label>
        <label className="label" type="text">
          Email:
          <input type="text" name="email" />
        </label>
        <label className="label" type="text">
          Cel:
          <input type="text" name="celular" />
        </label>
        <label className="label consultar " type="text">
          Consulta:
          <textarea type="text" name="name" className="consulta"  />
          <input type="btn" className="btn btn-primary"  value="Enviar"  />
        </label>
        
      </form>
    )
}




