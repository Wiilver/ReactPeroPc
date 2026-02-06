import {useState} from "react"

function Selector(props){
    function cambio(e){
        props.selector(e.target.value)
    }
    return(
        <div className="Selector">
            <label htmlFor="Selector_Color" >Por favor, seleccione su color :</label>
            <input type="color" id = "Selector_Color" className="Selector_Color" onChange={(e) =>cambio(e)}></input>
        </div>
    );
}

export default Selector