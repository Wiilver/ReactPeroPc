function Turno(props){
    return(
        <div className="Turno">
            <p>Es el turno de la <b>{props.Turno? "X" : "O"}</b></p>
        </div>
    );
}
export default Turno