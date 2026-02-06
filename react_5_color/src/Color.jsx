import {useState} from "react"

function Color(props){
    
    return(
        <div className="Color" style={{backgroundColor: props.color}}>
            <p className="Color_Texto">{props.color}</p>
        </div>
    );
}

export default Color