import React from 'react';

const Contact = () => {
    return (
        <div className="contactform">
            <h1>CONTACT US</h1>
            <form>
                <input type="text" name="firstname" placeholder="FIRST NAME"/>
                <input type="text" name="lastname" placeholder="LAST NAME"/>
                <input type="email" name="mail" placeholder="MAIL ADRESS"/>
                <input type="textarea" name="message" placeholder="MESSAGE"/>  
            </form>
        </div>   
    );
}

export default Contact;