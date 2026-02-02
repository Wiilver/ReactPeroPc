import Cell from "./Cell";

function Juego(){
    return(
        <div className="Tablero">
            <table className="Tabla">
                <tr>
                    <Cell es = "Dona"/>
                    <Cell es = "Dona"/>
                    <Cell es = "Dona"/>
                </tr>
                <tr>
                    <Cell es = "Dona"/>
                    <Cell es = "Dona"/>
                    <Cell es = "Dona"/>
                </tr>
                <tr>
                    <Cell es = "Dona"/>
                    <Cell/>
                    <Cell/>
                </tr>
            </table>
        </div>
    );
}

export default Juego