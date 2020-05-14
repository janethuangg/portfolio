import React from "react"
import WorkTitle from "../../components/WorkTitle"
import MultiImages from "../../components/MultiImages"
import pckg from "../../assets/pckg.jpg"
import double from "../../assets/Artboard.jpg"
import refill from "../../assets/refill.jpg"
import oily from "../../assets/oily.jpg"  
import combo from "../../assets/combo.jpg"  
import dry from "../../assets/dry.jpg"  

function helloava(){
    console.log({pckg})
    return(
        <div>
            <WorkTitle title = "helloava" />
            <p>
                As with most startup gigs, I had to wear many hats while interning at HelloAva. 
                While coordinating the development of a new, comprehensive email campaign, 
                I realized that the team didn't have the bandwith to churn out 10+ designs. 
                I had always enjoyed making things look ~aesthetic~ and playing around with 
                details & layouts, so I decided to take a stab at crafting the new emails. 
                Here are a few of my final designs:
            </p>
        
            <MultiImages 
                images={[
                    {source: pckg,
                    width: "100%",
                    vertMargin: "20px"},
                    {source: refill,
                    width: "100%",
                    vertMargin: "20px"},
                    {source: double,
                    width: "100%",
                    vertMargin: "20px"}
                ]}
            />

            <p>
                The amount of freedom I faced, as well as the ambiguity of this creative task, 
                forced me to think in unfamiliar ways. Rather than piecing together a solution 
                from tangible data and/or research, I had to (literally) draw an answer out of thin air. 
                While daunting at first, I soon found myself happily immersed in this world that was only 
                constrained by my own imagination. With my successful completion of the email campaign, 
                I became the go-to person for ad-hoc design requests and was tasked with designing event invitations, 
                table cards (pictured below), and more.
            </p>

            <MultiImages 
                images={[
                    {source: oily,
                    width: "100%",
                    vertMargin: "20px"},
                    {source: combo,
                    width: "100%",
                    vertMargin: "20px"},
                    {source: dry,
                    width: "100%",
                    vertMargin: "20px"}
                ]}
            />

            <p>
                My brief stint as a business-analyst-turned-designer is what kickstarted my interest in design, 
                and I hope to continue integrating design principles and processes into my daily activities 
                and future ventures.
            </p>

            <br /><br />
        </div>
    )
}
    
export default helloava
