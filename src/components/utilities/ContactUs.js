// Import
import React from "react";

// Functional Component
const ContactUs = () => {
    return(
        <div>
            <h2 id="contact-title">Contact Us</h2>
            <p className="contact-text">At Car Haven, we value your feedback and opinions. By filling out this contact form, you will be able to reach our customer service team and share any questions, concerns, or suggestions you may have. Whether you're inquiring about a specific vehicle or just want to give us your thoughts on your last visit, we're here to listen. Your input helps us improve our dealership and provide the best service possible. Thank you for choosing Car Haven.</p>

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
                <br></br>
                <input type="submit" value="Send" id="submit-button"></input>
            </form>
        </div>
    )
};

// Export
export default ContactUs;

// Rememeber IDs(#) are more specific than Classes(.)