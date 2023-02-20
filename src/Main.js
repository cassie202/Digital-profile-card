import React from "react";
import Avatar from "./Avatar.png"
import FacebookIcon from "./Assets/Facebook Icon.png"
import GitHubIcon from "./Assets/GitHub Icon.png"
import InstagramIcon from "./Assets/Instagram Icon.png"
import TwitterIcon from "./Assets/Twitter Icon.png"


function Main(){
    return(
        <div className ="container">
            <div className="main">
             <img src = {Avatar} alt = "Avatar"className = "Avatar"/>
                <div className = "hero">
                <h3 className="name">Cassandra Umeh</h3>
                <p className="role">Frontend developer</p>
                <p className="contact">cassie.gmail.com</p>
                <div className="button">
                <button className="Email-btn">Email</button>
                <button className="linkedIn-btn">LinkedIn</button>
                </div>
                <h4 className="about">About</h4>
                <p className="about-paragraph">A motivated software engineering graduate from Altschool Africa with 6 months
                of experience in software development. I am also an ardent open-source
                contributor and technical writer </p>
                 <h4 className="interest">Interests</h4>
                 <p className="interest-paragraph">Coding, resting, exercising.</p>
                 </div> 
                 </div>
           
            <footer className="footer">
                <img src= {TwitterIcon} alt = "twitter-logo"/>
                <img src= {FacebookIcon} alt = "facebook-logo"/>
                <img src= {InstagramIcon} alt = "instagram-logo"/>
                <img src= {GitHubIcon} alt = "GitHub-logo"/>
            </footer>
            

        </div>
    )
}

export default Main;