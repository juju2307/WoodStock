import React from 'react';
import Chaiseabout from '../img/chaiseabout.png'

const About = () => {
    return (
        <div className="aboutus">
            <span className="image">
                <div className="color"></div>
                <img className="chaiseabout" src= {Chaiseabout} alt="chaise" width="250px" height="300px"/>
            </span>
            <div className="text">
                <div className="titlebarre">
                    <div className="barre"></div>
                    <h1 className="titleabout">ABOUT US</h1>
                </div>
                <p>Look, just because i don't be givin' no man a foot massage don't make it right Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause i'll kill the motherfucker, know what i'm sayin'?</p>
                <div className="h3ligne">
                    <h3 className="learnmore">LEARN MORE</h3>
                    <div className="ligne"></div>
                </div>
             </div>
        </div>
    );
}

export default About;