import React, { useState } from 'react';
import './../assets/styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        
        
        setSubmitted(true); 
        setFormData({ name: '', email: '', message: '' }); 
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>If you're interested in my work, feel free to reach out!</p>
            
            {submitted && <p className="success-message" style={{color:'green'}}>Thank you! Your message has been sent.</p>}
            
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
