import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props)=>{

    const { colorPrimario, titulo,id } = props.datos
    const {colaboradores,eliminarColaborador,actualizarColor, like} =props
    const estiloEquipo ={backgroundColor: hexToRgba (colorPrimario, 0.4)}
    const colorBorde ={borderColor: colorPrimario}

    return <>
    { colaboradores.length > 0 &&
        <section className="equipo" style={estiloEquipo}>
            <input
                className="input-color"
                type="color"
                value={colorPrimario}
                onChange={(e)=>{
                    actualizarColor(e.target.value, id)    
                }}
            
            
            
            />
            <h3 style={colorBorde}>{titulo}</h3>
            <div className="colaboradores">
                    {
                    colaboradores.map(
                        (colaborador, index)=><Colaborador 
                        datos={colaborador}
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        
                        />
                    )
                }
            </div>
        </section>
    }
</>}

export default Equipo