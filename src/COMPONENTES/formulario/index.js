import { useState } from "react"
import Campo from "../campo/index.js"
import Opciones from "../opciones/index.js"
import Boton from "../boton/index.js"
import "./formulario.css"

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    const {registrarColaborador, equipos,crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("manejar el envio")
        const datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosAEnviar)
    }
    
    const manejarNuevoEquipo =(e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})//Lo mandamos como si fuera un objeto.. en vez de mandar titulo: titulo el segundo hace referencia al valor 
    }
      return <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear un colaborador</h2>
                <Campo 
                    titulo="Nombre" 
                    placeholder="Ingrese el nombre" 
                    required 
                    valor={nombre} 
                    actualizarValor={actualizarNombre}
                />
                <Campo 
                    titulo="Puesto" 
                    placeholder="Ingrese el puesto " 
                    required 
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
                />
                <Campo 
                    titulo="Foto" 
                    placeholder="Ingrese el link de la imagen " 
                    required 
                    valor={foto} 
                    actualizarValor={actualizarFoto}
                />
                <Opciones
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos={equipos}
                />
                <Boton>
                    Crear
                </Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear un nuevo equipo</h2>
                <Campo 
                    titulo="Título" 
                    placeholder="Ingrese el título del equipo" 
                    required 
                    valor={titulo} 
                    actualizarValor={actualizarTitulo}
                />
                <Campo 
                    titulo="Color" 
                    placeholder="Ingrese el color en Hex " 
                    required 
                    valor={color} 
                    actualizarValor={actualizarColor}
                    type="color"
                />
                <Boton>
                    Crear equipo
                </Boton>
            </form>
      </section>
}

export default Formulario