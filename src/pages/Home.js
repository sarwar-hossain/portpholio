import React from 'react';
import './../assets/styles/Home.css';

function Home(props) {
    return (
        <div className="home">
            <section className="hero">
                <h1>Welcome to My Portfolio</h1>
                <h3>My name is {props.name} and age is {props.age}</h3>
                <p>I am a Full-Stack Developer passionate about creating innovative web solutions.</p>
                <a href="projects" className="cta-button">View My Work</a>
            </section>


            <section id="projects" className="projects">
                <h2>My Projects</h2>
                <div className="project-list">

                    <div className="project-item">
                        <h3>Portfolio</h3>
                        <p>A personal portfolio built using React.js for the front end and Node.js with MongoDB for the back end. Features include project showcases, skill highlights, and a contact form for potential clients or employers.</p>
                        <a href="#" className="project-link">Learn More</a>
                    </div>
                    <div className="project-item">
                        <h3>School Management System</h3>
                        <p>A full-stack application for managing school activities, including student records, attendance, and grading. Built with React.js, Node.js, and MongoDB, featuring role-based access for teachers, students, and administrators.</p>
                        <a href="#" className="project-link">Learn More</a>
                    </div>
                    <div className="project-item">
                        <h3>E-commerce Platform</h3>
                        <p>An online shopping platform with a React.js front end and Node.js/MongoDB back end. Includes product listings, a shopping cart, and secure payment options. Admin panel allows for product management and order tracking.</p>
                        <a href="#" className="project-link">Learn More</a>
                    </div>
                    <div className="project-item">
                        <h3>Online Course Platform</h3>
                        <p>A platform for hosting and enrolling in online courses. Built with React.js, Node.js, and MongoDB. Key features include course enrollment, video streaming, progress tracking, and a feedback system.</p>
                        <a href="#" className="project-link">Learn More</a>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default Home;
