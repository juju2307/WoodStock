import React from 'react';


const Accueil = () => {
    return (
        <div className="menu">
            <div className="logowood">
                <div className="menutitle">
                    <p className="wood">WOOD</p>
                    <p className="stock">STOCK</p>
                </div>
            <div className="lignemenu"></div>
        </div>
            <div className="left">

                <div className="ligneaccueil"></div>
                <div className="ligneaccueil"></div>
                <div className="ligneaccueil"></div>

                <div className="logo">
                    <p className="logotext">WOOD</p>
                    <div className="lignelogo"></div>
                </div>

            </div>

            <div className="right">

                <nav>
                    <ul className="nav">
                         <li><a href=" ">About</a></li>
                         <li><a href=" ">Shop</a></li>
                         <li><a href=" ">Team</a></li>
                         <li><a href=" ">Contact</a></li>
                    </ul>
                </nav>
                <div className="verticalline"></div>
            </div>
               
        </div>
    );
}

export default Accueil;