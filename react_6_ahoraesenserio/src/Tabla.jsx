import Celda from "./Celda.jsx"
import {useState} from "react"

function Tabla(){

    const [turno, setTurno] = useState(false);
    const [tab, setTab] = useState(['-','-','-','-','-','-','-','-','-']);

    const p = {
        turno : turno,
        cambiar : setTurno,
        set : setTab,
        tab : tab
    }

    return(
        <div className = "Tabla_Fondo">
            <table>
                <tbody>
                    <tr>
                        <Celda id = "1" p = {p}/>
                        <Celda id = "2" p = {p}/>
                        <Celda id = "3" p = {p}/>
                    </tr>
                    <tr>
                        <Celda id = "4" p = {p}/>
                        <Celda id = "5" p = {p}/>
                        <Celda id = "6" p = {p}/>
                    </tr>
                    <tr>
                        <Celda id = "7" p = {p}/>
                        <Celda id = "8" p = {p}/>
                        <Celda id = "9" p = {p}/>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Tabla