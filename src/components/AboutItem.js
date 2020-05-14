import React from "react"

function AboutItem(props){
    console.log(props)
    return(
        <p>
            <strong><i>{props.question}</i></strong>
            <br />
            {props.answer}
            <br /><br />
        </p>
    )
}

export default AboutItem