import React from "react"

function WorkTitle(props){
    console.log(props.title)
    return(
        <h1 className="centered">{props.title}</h1>
    )
}

export default WorkTitle