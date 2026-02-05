import Celda from "./Celda"
import React, {useState} from "react";

import Dona from "./assets/Dona.png"
import Equis from "./assets/Equis.png"

function Tabla(){
    const [estado, setEstado] = useState("cruz");
    const [pudimos, setPudimos] = useState();
    
    const cambiar = (e) =>{
        if(e.target.src == "")
        {
            if(estado=="circulo") {
                setEstado("cruz");
                e.target.src = Dona;
                switch(Number(e.target.id)){
                    case 1:
                        document.getElementById("tabla").rows[0].cells[0].id = "O";
                        break;
                    case 2:
                        document.getElementById("tabla").rows[0].cells[1].id = "O";
                        break;
                    case 3:
                        document.getElementById("tabla").rows[0].cells[2].id = "O";
                        break;
                    case 4:
                        document.getElementById("tabla").rows[1].cells[0].id = "O";
                        break;
                    case 5:
                        document.getElementById("tabla").rows[1].cells[1].id = "O";
                        break;
                    case 6:
                        document.getElementById("tabla").rows[1].cells[2].id = "O";
                        break;
                    case 7:
                        document.getElementById("tabla").rows[2].cells[0].id = "O";
                        break;
                    case 8:
                        document.getElementById("tabla").rows[2].cells[1].id = "O";
                        break;
                    case 9:
                        document.getElementById("tabla").rows[2].cells[2].id = "O";
                        break;
                }
                
                if(
                ((document.getElementById("tabla").rows[0].cells[0].id == "O")&&(document.getElementById("tabla").rows[0].cells[1].id == "O")&&(document.getElementById("tabla").rows[0].cells[2].id == "O"))||
                ((document.getElementById("tabla").rows[1].cells[0].id == "O")&&(document.getElementById("tabla").rows[1].cells[1].id == "O")&&(document.getElementById("tabla").rows[1].cells[2].id == "O"))||
                ((document.getElementById("tabla").rows[2].cells[0].id == "O")&&(document.getElementById("tabla").rows[2].cells[1].id == "O")&&(document.getElementById("tabla").rows[2].cells[2].id == "O"))||
                ((document.getElementById("tabla").rows[0].cells[0].id == "O")&&(document.getElementById("tabla").rows[1].cells[0].id == "O")&&(document.getElementById("tabla").rows[2].cells[0].id == "O"))||
                ((document.getElementById("tabla").rows[0].cells[1].id == "O")&&(document.getElementById("tabla").rows[1].cells[1].id == "O")&&(document.getElementById("tabla").rows[2].cells[1].id == "O"))||
                ((document.getElementById("tabla").rows[0].cells[2].id == "O")&&(document.getElementById("tabla").rows[1].cells[2].id == "O")&&(document.getElementById("tabla").rows[2].cells[2].id == "O"))||
                ((document.getElementById("tabla").rows[0].cells[0].id == "O")&&(document.getElementById("tabla").rows[1].cells[1].id == "O")&&(document.getElementById("tabla").rows[2].cells[2].id == "O"))||
                ((document.getElementById("tabla").rows[2].cells[0].id == "O")&&(document.getElementById("tabla").rows[1].cells[1].id == "O")&&(document.getElementById("tabla").rows[0].cells[2].id == "O"))
                ){
                    window.alert("Ganaron las o")
                    location.reload()
                }
            }
            else {
                setEstado("circulo");
                e.target.src=Equis;
                switch(Number(e.target.id)){
                    case 1:
                        document.getElementById("tabla").rows[0].cells[0].id = 'X';
                        break;
                    case 2:
                        document.getElementById("tabla").rows[0].cells[1].id = 'X';
                        break;
                    case 3:
                        document.getElementById("tabla").rows[0].cells[2].id = 'X';
                        break;
                    case 4:
                        document.getElementById("tabla").rows[1].cells[0].id = 'X';
                        break;
                    case 5:
                        document.getElementById("tabla").rows[1].cells[1].id = 'X';
                        break;
                    case 6:
                        document.getElementById("tabla").rows[1].cells[2].id = 'X';
                        break;
                    case 7:
                        document.getElementById("tabla").rows[2].cells[0].id = 'X';
                        break;
                    case 8:
                        document.getElementById("tabla").rows[2].cells[1].id = 'X';
                        break;
                    case 9:
                        document.getElementById("tabla").rows[2].cells[2].id = 'X';
                        break;
                }
                
                if(
                ((document.getElementById("tabla").rows[0].cells[0].id == 'X')&&(document.getElementById("tabla").rows[0].cells[1].id == 'X')&&(document.getElementById("tabla").rows[0].cells[2].id == 'X'))||
                ((document.getElementById("tabla").rows[1].cells[0].id == 'X')&&(document.getElementById("tabla").rows[1].cells[1].id == 'X')&&(document.getElementById("tabla").rows[1].cells[2].id == 'X'))||
                ((document.getElementById("tabla").rows[2].cells[0].id == 'X')&&(document.getElementById("tabla").rows[2].cells[1].id == 'X')&&(document.getElementById("tabla").rows[2].cells[2].id == 'X'))||
                ((document.getElementById("tabla").rows[0].cells[0].id == 'X')&&(document.getElementById("tabla").rows[1].cells[0].id == 'X')&&(document.getElementById("tabla").rows[2].cells[0].id == 'X'))||
                ((document.getElementById("tabla").rows[0].cells[1].id == 'X')&&(document.getElementById("tabla").rows[1].cells[1].id == 'X')&&(document.getElementById("tabla").rows[2].cells[1].id == 'X'))||
                ((document.getElementById("tabla").rows[0].cells[2].id == 'X')&&(document.getElementById("tabla").rows[1].cells[2].id == 'X')&&(document.getElementById("tabla").rows[2].cells[2].id == 'X'))||
                ((document.getElementById("tabla").rows[0].cells[0].id == 'X')&&(document.getElementById("tabla").rows[1].cells[1].id == 'X')&&(document.getElementById("tabla").rows[2].cells[2].id == 'X'))||
                ((document.getElementById("tabla").rows[2].cells[0].id == 'X')&&(document.getElementById("tabla").rows[1].cells[1].id == 'X')&&(document.getElementById("tabla").rows[0].cells[2].id == 'X'))){
                    window.alert("Ganaron las x")
                    location.reload()

                }
            }
        }
        console.log(document.getElementById("tabla"));
    }

    return(
        <table>
            <tbody onClick={(e) => cambiar(e)} id="tabla">
                <tr className="row">
                    <Celda estado = {estado} nombre = "1"/>
                    <Celda estado = {estado} nombre = "2"/>
                    <Celda estado = {estado} nombre = "3"/>
                </tr>
                <tr>
                    <Celda estado = {estado} nombre = "4"/>
                    <Celda estado = {estado} nombre = "5"/>
                    <Celda estado = {estado} nombre = "6"/>
                </tr>
                <tr>
                    <Celda estado = {estado} nombre = "7"/>
                    <Celda estado = {estado} nombre = "8"/>
                    <Celda estado = {estado} nombre = "9"/>
                </tr>
            </tbody>
        </table>
    );
}

export default Tabla