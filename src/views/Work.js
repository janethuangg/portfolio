import React from "react"
import WorkCat from "../components/WorkCat"
// import {reactScrollCollapse} from 'react-scroll-collapse';
// import {reactScrollCollapseSagas} from 'react-scroll-collapse';
// import {collapserController} from 'react-scroll-collapse';
// import Scroller from 'react-scroll-collapse';

function Work(){
    return(
    <div>
        <h1>work</h1>
        <h3>a collection of personal projects ranging from data exploration to app prototyping to value investing</h3>
        <WorkCat 
            cat="tech" 
            workItems={[
                {project: "credit card default",
                description: "using machine learning models to predict whether a credit card client will default",
                destination: '/work/credit'},
                {project: "airline stock strategy",
                description: "exploration of a stock trading strategy based on flight traffic and weather patterns",
                destination: '/work/airline'},
                {project: "lyft data challenge",
                description: "my first attempt at a data challenge and the start of my data science adventures",
                destination: '/work/lyft'}
            ]}
        />
        <WorkCat 
            cat="design" 
            workItems={[
                {project: "take three",
                description: "from user research to prototyping — creating an app to celebrate daily accomplishments",
                destination: '/work/takethree'},
                {project: "helloava",
                description: "email + table card designs I developed as side-projects while working at a skincare-tech startup",
                destination: '/work/helloava'}
            ]}
        />
        <WorkCat 
            cat="finance" 
            workItems={[
                {project: "value investing",
                description: "slidedecks + financial models created during my days at a student-run hedge fund",
                destination: '/work/value'},
                {project: "case competition",
                description: "my m&a-based take on what boeing should do next (aside from fixing the 737 max)",
                destination: '/work/case'}
            ]}
        />
        <br /><br />
    </div>
    )
}
    
export default Work
