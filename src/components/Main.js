import React from "react"
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from "../views/Home"
import About from "../views/About"
import Work from "../views/Work"
import Fun from "../views/Fun"
import Contact from "../views/Contact"
import helloava from "../views/Work/helloava"

function Main(){
    return(
        <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/work' component={Work}></Route>
        <Route exact path='/work/helloava' component={helloava}></Route>
        <Route exact path='/fun' component={Fun}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        </Switch>
    )
}

export default Main