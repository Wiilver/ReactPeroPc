import Fila from "./Fila.jsx"
import {useState} from "react"

function Tabla(){

    const [tablero, setTablero] = useState(()=>(hacer));

    function hacer(){
        let list = [];
        let arr = [];
        for(let i = 0; i < 8; i++) arr.append("-");
        for(let i = 0; i < 8; i++) list.append(arr);
        return arr;
    }

    function imprimir(){
        console.log(tablero);
    }

    return(
        <table>
            <tbody onClick={imprimir}>
                <Fila/>
                <Fila/>
                <Fila/>
                <Fila/>
                <Fila/>
                <Fila/>
                <Fila/>
                <Fila/>
            </tbody>
        </table>
    );
}

export default Tabla