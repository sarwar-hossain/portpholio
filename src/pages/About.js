import React from 'react';
import './../assets/styles/About.css';

function About() {
    return (
        <div className="about-page">
            <section className="about-intro">
                <h1>About Me</h1>
                <p>Hello! I’m Sarwar Hossain, a dedicated and skilled MERN Stack Developer with expertise in building full-stack web applications using HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express. I am passionate about creating responsive, dynamic, and user-centric applications that provide seamless experiences across all devices. My focus is on writing clean, maintainable code and continuously enhancing my skills in modern web technologies.</p>
            </section>

            <section className="skills">
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript (React, Node.js)</li>
                    <li>HTML & CSS (Responsive Design, Flexbox, Grid)</li>
                    <li>Backend Development (Express, MongoDB)</li>
                    <li>Version Control (Git, GitHub)</li>
                    <li>UI/UX Design Principles</li>
                    <li>Bootstrap for Responsive Design</li>
                    <li>Testing & Debugging</li>
                </ul>
            </section>



        </div>
    );
}

export default About;
