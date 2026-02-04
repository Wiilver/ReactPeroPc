function Comentario(props){
    const alt = `Foto de perfil de ${props.Nombre}`;
    return(
        <div className="Comentario">
            <div className="Cuadro_Gris">
                <a href={props.Link}>
                    <img alt = {alt} src = {props.Foto} className="Comentario_Foto"></img>
                </a>
            </div>
            <p className="Fecha">{props.Fecha}</p>
            <a href={props.Link} className="Nombre"><b>{props.Nombre}</b></a>
            <p>{props.Texto}</p>
        </div>
    );
}

export default Comentario