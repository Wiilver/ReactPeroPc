import Fila from "./Fila.jsx"
import {useState} from "react"

function Tabla(){

    const [tablero, setTablero] = useState(new Array(8).fill(new Array(8)));
    
    function hacer(){
        
        for(let i = 0; i < 8; i++) 
        {
            for(let j = 0; j < 8; j++) 
            {
                
            }
        }
        
    }

    function imprimir(){
        hacer();
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