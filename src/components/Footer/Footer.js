import React from 'react';
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <br/><br/><br/>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
               <br/>
                <ul className="social-links">
                    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                </ul>
            </div>
            <br/><br/>
        </footer>
    );
}

export default Footer;
