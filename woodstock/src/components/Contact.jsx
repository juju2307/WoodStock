import React from 'react';

const Contact = () => {
    return (
        <div className="contactform">
            <h1 className="titlecontact">CONTACT US</h1>
            <form className="formulaire" action="" method="post">
                <div className="nameform">
                     <input className="firstform" type="text" name="firstname" placeholder="FIRST NAME"/>
                     <input className="lastform" type="text" name="lastname" placeholder="LAST NAME"/>
                </div>
                <input className="mailform" type="email" name="mail" placeholder="MAIL ADRESS"/>
                <input className="textform" type="textarea" name="message" placeholder="MESSAGE"/>  
            </form>
        </div>   
    );
}

export default Contact;