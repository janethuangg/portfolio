
import { NavLink } from 'react-router-dom'
import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Main from './components/Main'

    function App(){
      return(
      <div className='app'>
        <Navigation />
        <Main />
      </div>
      )
    } 
  
    export default App;