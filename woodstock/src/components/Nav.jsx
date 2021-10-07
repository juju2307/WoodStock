import React from 'react';


const Nav = () => {
    return (
        <div className="menu">
            <nav>
                 
                 <ul className="nav">
                     <li><img className="logo"src="" alt="logo"/></li>
                     <li><a href=" ">About</a></li>
                     <li><a href=" ">Shop</a></li>
                     <li><a href=" ">Team</a></li>
                     <li><a href=" ">Contact</a></li>
                 </ul>
            </nav>
            <div className="accueil">
                <h1 className="title">WOOD</h1>
                <h1 className="title">STOCK</h1>
            </div>
            <div className="verticalline"></div>
        </div>
    );
}

export default Nav;