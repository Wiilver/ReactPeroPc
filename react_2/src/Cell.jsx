import Dona from "./assets/Dona.png"
import Equis from "./assets/Equis.png"

function Cell(props){
    var imagen;
    if(props.es=="Dona") imagen = Dona;
    else if(props.es=="Equis") imagen = Equis;

    return(
        <th><img src={imagen}></img></th>
    );
}

export default Cell