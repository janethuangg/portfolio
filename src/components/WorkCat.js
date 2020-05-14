import React, {useState} from "react"
import Collapsible from 'react-collapsible'
import {Button} from 'react-native'
import WorkItem from './WorkItem'

function WorkCat(props){
    const WorkItems = props.workItems.map(item => 
    
    <WorkItem 
        project={item.project} 
        description={item.description} 
        destination={item.destination}/>)

    return(
        <div className="workCat">
            <Collapsible trigger={props.cat}>
                <ul className="workItem">
                    {WorkItems}
                </ul>
            </Collapsible>
        </div>

    )
}

export default WorkCat