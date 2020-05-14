import React from "react"
import tonton from "../assets/tonton.gif"
import Image from "../components/Image"

function Home(){
    return(
    <div className='home'>
      <h1 className="name">Janet Huang</h1>
      <h3 className="name"> "Huang" directly translates to yellow, a color I associate with warmth & happiness</h3>
      <Image source={tonton} width="275px" vertMargin="30px"/>
      <h3 className="name">*website is currently under construction*</h3>
    </div>
    )
}
    
export default Home
