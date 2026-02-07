import {useState} from "react"
import Dona from "./assets/Dona.png"
import Equis from "./assets/Equis.png"


function Celda(props){
    const p = props.p;
    const [imagen, setImagen] = useState()
    function validacion(lista, car){
        console.log(lista)
        if(lista[4] == car){
            if((lista[0] == car)&&(lista[8] == car)) return true;
            if((lista[2] == car)&&(lista[6] == car)) return true;
            if((lista[3] == car)&&(lista[5] == car)) return true;
            if((lista[1] == car)&&(lista[7] == car)) return true;
        }
        if(lista[8] == car){
            if((lista[7]==car)&&(lista[6]==car)) return true;
            if((lista[5]==car)&&(lista[2]==car)) return true;
        }
        if(lista[0] == car){
            if((lista[1]==car)&&(lista[2]==car)) return true;
            if((lista[3]==car)&&(lista[6]==car)) return true;
        }
        return false;
    }
    
    function cosa(){
    if(p.tab[Number(props.id)-1] == "-")
        {
            p.cambiar(t => !t);
            let car = ""
            car = (p.turno ? "X" : "O")
            p.turno ? setImagen(Equis) : setImagen(Dona) 
            p.set(t => {;
                let copia = [...t];
                copia[Number(props.id)-1] = car;
                if(validacion(copia, car))
                {
                    window.alert(`Felicidades, ganaron las ${car}`)
                    location.reload()
                }
                return copia;
            });
        } 
    }
    return(
        <th onClick={cosa} className="Celda" id = {props.id}><img className="Celda_Imagen" id={"imagen_" + props.id} src = {imagen}></img></th>
    );
}

export default Celda