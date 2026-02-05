function Celda(props){
    const contar = (e) =>{
        if(props.estado=="circulo") e.target.textContent = "O"
        else e.target.textContent = "X"
    }
    return(
        <th className = "Celda" id=""><img id = {props.nombre} className="Foto" onClick={(e) => contar(e)}></img></th>
    );
}

export default Celda