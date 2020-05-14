import React from "react"
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo2.svg";

function Navigation(){
    return(
        <div>
        <img src={logo} className="logo"></img>
        <nav>
            <ul>
                <li><NavLink exact activeClassName="current" to='/contact'>contact</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/fun'>fun</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/work'>work</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/about'>about</NavLink></li>
                <li><NavLink exact activeClassName="current" to='/'>home</NavLink></li>
            </ul>
        </nav>
        </div>
    )
}
    
export default Navigation