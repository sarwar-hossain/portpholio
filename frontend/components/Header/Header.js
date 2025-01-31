import React from 'react';
import './Header.css'; 
function Header() {
    return (
        <header className="header">
            <div className="logo">MyPortfolio</div>
            <nav className="nav">
                <ul>
                    <li><a href="./">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
            <a href='contact' className="contact-btn">Get in Touch</a>
        </header>
    );
}

export default Header;
