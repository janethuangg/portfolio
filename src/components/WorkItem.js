import React from "react"
import { NavLink } from 'react-router-dom'

function WorkItem(props){
    console.log(props.destination)
    return(
        <li className="workItem">
            <NavLink className="link" exact to={props.destination}>{props.project}</NavLink>
            : {props.description}
        </li>
    )
}

export default WorkItem