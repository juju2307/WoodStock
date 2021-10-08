import React from 'react';
import Chaiseshop from '../img/chaiseshop.png'

const Shop = () => {
    return (
        <div className="shop">
        <div className="text">
            <div className="titlebarre">
                <div className="barre"></div>
                <h1 className="titleabout">SHOP</h1>
            </div>
            <p>Look, just because i don't be givin' no man a foot massage don't make it right Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause i'll kill the motherfucker, know what i'm sayin'?</p>
            <div className="h3ligne">
                <h3 className="learnmore">Go Shopping</h3>
                <div className="ligne"></div>
            </div>
         </div>
         <div className="imageshop">
            <img className="chaiseshop" src= {Chaiseshop} alt="chaise" width="550px" height="320px"/>
            <div className="colorshop"></div>
        </div>
    </div>
    );
}

export default Shop;