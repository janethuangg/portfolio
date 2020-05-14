import React from "react"
import Image from "../components/Image"

function MultiImages(props){
    const images = props.images.map(item =>  
        <div class="column">
            <Image 
                source={item.source} 
                width={item.width} 
                vertMargin={item.vertMargin}/> 
        </div>)
        console.log(images)
        
        return(
            <div class="row">
                {images}
            </div>
        )

    // return(
    //     <div class="row">
    //         <div class="column">
    //             <Image source={pckg} width="100%" vertMargin="30px"/> 
    //         </div>
    //         <div class="column">
    //             <Image source={refill} width="100%" vertMargin="30px"/>            
    //         </div>
    //         <div class="column">
    //             <Image source={combo} width="100%" vertMargin="30px"/> 
    //         </div>
    //     </div>
    // )
}

export default MultiImages