import React from 'react';
import Imageteam from '../img/imageteam.png'

const Team= () => {
    return (
        <div className="team">
            <div className="imageteam">
                <img src={Imageteam} alt="restaurant"/>
            </div>
            <div className="teampresentation">
            <div className="logo2">
                    <p className="logotext2">WOOD</p>
                    <div className="lignelogo2"></div>
                </div>
                 <h1 className="titleteam">CREATIVE TEAM</h1>
                 <h2 className="googteam">GOOG MINDSET</h2>
                 <p className="textteam">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugial nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                 <div className="endteam">
                     <h3 className="meatteam">Meat the team</h3>
                     <div className="lineteam"></div>
                 </div>

            </div>    
        </div>   
    );
}

export default Team;