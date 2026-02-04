import Comentario from "./Comentario.jsx"
function Caja({Nombre, Fecha, Link, Foto, Texto}){
    return(
        <div className = "Caja">
            <Comentario Nombre = {Nombre} Fecha = {Fecha} Link = {Link} Foto = {Foto} Texto = {Texto}/>
            <p className="Agregar"><a href=""><b>Agregar</b></a></p>
        </div>
    );
}

export default Caja