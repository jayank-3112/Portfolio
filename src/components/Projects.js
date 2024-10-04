// src/components/Projects.js
import React from 'react';
import { FaExternalLinkAlt, FaCode, FaBookOpen } from 'react-icons/fa'; // Import icons

const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React.js',
    liveLink: 'https://portfolio-1vv3sxgpt-jayank-3112s-projects.vercel.app/', // Example link
    repoLink: 'https://github.com/jayank-3112/Portfolio', // Example GitHub link
    readMoreLink: 'https://example.com/portfolio-details', // Example Read More link
  },
  {
    title: 'Seam Carver',
    description: 'A simple task manager built with Node.js and Express.',
    liveLink: 'https://seam-carving-1.onrender.com/', // Example link
    repoLink: 'https://github.com/karunsehwag/seam_carving', // Example GitHub link
    readMoreLink: 'https://example.com/todo-app-details', // Example Read More link
  },
  {
    title: 'Books Library',
    description: 'A simple task manager built with Node.js and Express.',
    repoLink: 'https://github.com/serc-courses/se-project-1--_27', // Example GitHub link
    readMoreLink: 'https://example.com/todo-app-details', // Example Read More link
  },
  {
    title: 'Poxis Shell Implementation',
    description: 'A simple task manager built with Node.js and Express.',
    repoLink: 'https://github.com/serc-courses/se-project-1--_27', // Example GitHub link
    readMoreLink: 'https://example.com/todo-app-details', // Example Read More link
  },
  {
    title: 'Real-Time Messaging Chat App',
    description: 'Messaging App built using realtime MERN Stack and Socket Programming for real-time messaging.',
    liveLink: 'https://example.com/todo-app', // Example link
    repoLink: 'https://github.com/serc-courses/se-project-1--_27', // Example GitHub link
    readMoreLink: 'https://example.com/todo-app-details', // Example Read More link
  },

];

function Projects() {
  return (
    <section style={styles.projectsSection}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <div key={index} style={styles.projectCard}>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <div style={styles.buttonGroup}>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={styles.button}>
                <FaExternalLinkAlt style={styles.icon} /> View Live
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" style={styles.button}>
                <FaCode style={styles.icon} /> Source Code
              </a>
              {/* <a href={project.readMoreLink} target="_blank" rel="noopener noreferrer" style={styles.button}>
                <FaBookOpen style={styles.icon} /> Read More
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  projectsSection: {
    padding: '50px 20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '40px',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
  },
  projectTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    marginBottom: '15px',
  },
  projectDescription: {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#666',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  button: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#003366',
    color: '#fff',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  icon: {
    marginRight: '5px', // Space between icon and text
  },
};

// Add hover effect for project cards
const projectCardHover = {
  transform: 'scale(1.08)',
  boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
};

export default Projects;
