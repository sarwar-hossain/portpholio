import React from 'react';
import './../assets/styles/Projects.css';

function Projects() {
    const projectData = [
        { 
            title: 'Portfolio', 
            description: 'A personal portfolio web application built using React for the frontend and Node.js with MongoDB for the backend. Showcases projects, skills, and experience in a clean, responsive design.', 
            link: '#' 
        },
        { 
            title: 'School Management System', 
            description: 'A comprehensive school management system that enables administrators, teachers, and students to manage and access data in real-time. Built with React, Node.js, and MongoDB to facilitate student management, scheduling, and attendance tracking.', 
            link: '#' 
        },
        { 
            title: 'E-commerce Platform', 
            description: 'An e-commerce application designed to provide a seamless online shopping experience, featuring product listings, a shopping cart, and secure checkout. Developed with React, Node.js, MongoDB, and integrated with payment gateways.', 
            link: '#' 
        },
        { 
            title: 'Online Course Platform', 
            description: 'A platform for hosting and managing online courses, allowing users to enroll, track progress, and access materials. Built using React, Node.js, and MongoDB, with a user-friendly interface for both instructors and students.', 
            link: '#' 
        }
    ];
    

    return (
        <div className="projects-page">
            <h1>My Projects</h1>
            <p>Here are some of the projects I have worked on.</p>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
