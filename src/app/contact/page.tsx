import React from "react";


const ContactPage = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title fade-in">
            We’re Here to Help</h1>
            <p className="contact-description">
Your questions matter—reach out, and let us guide you!
            </p>
            <form className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="contact-input"
                />
                 <input
                    type="number"
                    name="phnoe number"
                    placeholder="Your Phnoe Number"
                    className="contact-input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="contact-input"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="contact-textarea"
                ></textarea>
             <button type="submit" className="contact-button"> Submit</button>   
               
                
            </form>
            <div className="contact-info">
                <p>Email: <a href="mailto:example@email.com"> info@CarPortShowroom.com
                </a></p><br />
                <p>Address: 123 Auto Plaza, Car Town, CT 56789</p>
            </div>
        </div>
    );
}
export default ContactPage;