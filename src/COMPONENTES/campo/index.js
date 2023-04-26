import "./campo.css"
import { useState } from "react"
const Campo = (props) =>{
    //input controlados 
   
    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value)
    }
    
    const titulo = props.titulo
    const placeholder = `${props.placeholder}...`

    const {type = "text"} =props

    return <div className={`campo campo-${type}` }>
                <label>{titulo}</label>
                <input 
                    placeholder={placeholder} 
                    required={props.required} 
                    value={props.valor}
                    onChange={manejarCambio}
                    type={type}
                />
           </div>
}

export default Campo