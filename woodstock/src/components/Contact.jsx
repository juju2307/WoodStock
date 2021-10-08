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
                <textarea className="textform" name="message" placeholder="MESSAGE" rows="10" cols="50"/>  
            </form>
        </div>   
    );
}

export default Contact;