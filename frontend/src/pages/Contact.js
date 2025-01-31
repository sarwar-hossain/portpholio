import React, { useState } from 'react';
import './../assets/styles/Contact.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from 'react-hot-toast';

function Contact() {
    const initialState = {
        name: "",
        phone: "",
        email: "",
        message: ""
    };

    const [user, setUser] = useState(initialState);
    const [submitted, setSubmitted] = useState(false); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
       
        e.preventDefault();
        try {
            console.log("lksadjjf");
            const response = await axios.post("http://localhost:7000/api/create", user);
            toast.success(response.data.msg, { position: "top-right" });
            setSubmitted(true); 
            setUser(initialState); 
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message", { position: "top-right" });
        }
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>If you're interested in my work, feel free to reach out!</p>

            {submitted ? (
                <p className="success-message" style={{ color: 'green', fontSize: '27px', marginBottom: '200px', marginTop: '150px' }}>
                    Thank you! Your message has been sent.
                </p>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={user.name} 
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                     Phone:
                        <input
                            type="text"
                            name="phone"
                            value={user.phone} 
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={user.email} 
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={user.message} 
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">Send Message</button>
                </form>
            )}
        </div>
    );
}

export default Contact;
