// Import
import React from "react";

// Functional Component
const ContactUs = () => {
    return(
        <div>
            <form id="contact-form">
                <label>Name: </label>
                <input type="text" name="name" placeholder="Your name here"></input>
                <br />
                <br></br>
                <label>Email: </label>
                <input type="email" name="email" placeholder="Your email here"></input>
                <br />
                <br></br>
                <label>Message: </label>
                <textarea name="message" placeholder="Your message here"></textarea>
                <br />
                <br></br>
                <input type="submit" value="Send" id="submit-button"></input>
            </form>
        </div>
    )
};

// Export
export default ContactUs;

// Rememeber IDs(#) are more specific than Classes(.)