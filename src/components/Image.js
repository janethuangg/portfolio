import React from "react"

function Image(props){
    console.log(props)
    return(
        <img class="centerImg" 
        src={props.source} 
        width={props.width} 
        style={{marginBottom:props.vertMargin, marginTop:props.vertMargin}}
        alt="error :("/>
    )
}

export default Image