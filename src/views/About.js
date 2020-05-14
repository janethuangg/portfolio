import React from "react"
import AboutItem from "../components/AboutItem"
import Janet from "../assets/janet.jpg";



function About(){
    return(
    <div>
        <img class="selfie" src={Janet} alt="error :("/>
        <h1 className="intro">hi there, i'm janet!</h1>

        <AboutItem 
            question="what's my background?" 
            answer="I'm currently a sophomore at NYU majoring in Statistics (Stern) and Computer Science (CAS). 
                    I started school as a finance major, but then I came to realize how much I loved designing, 
                    building, and analyzing things through working at a series of really cool startups. 
                    As a result, I began to take more technical classes, get involved in tech clubs across campus, 
                    and take on personal projects and competitions — it's been a lot of fun!"
        />
        <AboutItem 
            question="what's my goal?" 
            answer="Honestly, I'm still exploring. I've had the most exposure to data science (and am thoroughly 
                enjoying it so far), but I'm also interested in product management and software engineering. 
                Regardless of which path I pursue, I know that I want to work on products that I genuinely care about 
                and believe make a positive difference in our world."
        />
        <AboutItem
            question="what have I been up to?"
            answer="Over the past few months, I've been working at Canvs AI, a SaaS start-up that helps companies 
            understand the emotions driving their businesses using patented semantic analysis technology. 
            As a Data Analyst intern, I've done a lot of ad-hoc data analyses in Python, and I'm currently working 
            on building out the company's data pipeline." 
        />
        <AboutItem
            question="what do I do for fun?"
            answer="I'm a frozen dessert connoisseur, Shiba Inu enthusiast, and aspiring archer. While growing up, 
            I was also heavily involved in music (violin) and dance (ballet), so I like to learn new pieces or 
            choreographies every so often."
        />
        <br /><br />
    </div>
    )
}
    
export default About
