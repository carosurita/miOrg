import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Formulario from './COMPONENTES/formulario/index.js';
import Header from './COMPONENTES/header/index.js';
import MiOrg from './COMPONENTES/miOrg';
import Equipo from './COMPONENTES/equipo';
import Footer from './COMPONENTES/footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState (false)
  const [colaboradores,actualizarColaboradores] = useState ([
    { 
      id: uuid(),
      equipo: "Front-End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovación y gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: true,
    },
    
])
  
const [equipos, actualizarEquipos] = useState ([
  {
    id: uuid(),
    titulo:"Programación",
    colorPrimario:"#57c278",
    colorSecundario:"#d9f7e9 ",
  }, 
  {
    id: uuid(),
    titulo:"Front-End",
    colorPrimario:"#82CFFA",
    colorSecundario:"#E8F8FF",  
  }, 
  { 
    id: uuid(),
    titulo:"Data-Science",
    colorPrimario:"#A6D157",
    colorSecundario:"#F0F8E2",  
  },
  {
    id: uuid(),
    titulo:"Devops",
    colorPrimario:"#E06B69",
    colorSecundario:"#FDE7E8",  
  },
  {
    id: uuid(),
    titulo:"UX y Diseño",
    colorPrimario:"#DB6EBF",
    colorSecundario:"#FAE9F5",  
  }, 
  {
    id: uuid(),
    titulo:"Móvil",
    colorPrimario:"#FFBA05",
    colorSecundario:"#FFF5D9",  
  }, 
  {
    id: uuid(),
    titulo:"Innovación y gestión",
    colorPrimario:"#FF8A29",
    colorSecundario:"#FFEEDF",  
  }
])

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador)=>{
    console.log("Nuevo colaborador" , colaborador)
    //Spread operator : copia valores actuales a los q se le agrega algo nuevo [...colaboradores (copiamos), colaborador(sumamos)]
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter ((colaborador) => colaborador.id !== id)
    console.log(nuevosColaboradores)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id)=>{
    console.log ("actualizar: " , color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)

  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
      console.log (nuevoEquipo)
      actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid}])
  }
 
  //like
  
  const like = (id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{ 
      if (colaborador.id ===id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  //Ternario: condicion ? seMuestra: noSeMuestra
      /*{mostrarFormulario === true ? <Formulario/> : <></>} o 
        {mostrarFormulario ? <Formulario/> : <></>} o
        {mostrarFormulario && <Formulario/>}
      */

  return (
    <div>
        <Header/>
        {mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=>equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          
          />}
        <MiOrg cambiarMostrar={cambiarMostrar}/>
        {
          equipos.map((equipo)=><Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador=> colaborador.equipo ===equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />)
        }
        <Footer/>

      
    </div>
  );
}

export default App;
