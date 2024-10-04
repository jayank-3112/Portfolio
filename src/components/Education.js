// src/components/Education.js
import React from 'react';
import './Education.css'; // Import the CSS file for animations and styles
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa'; // Import icons from React Icons

function Education() {
  return (
    <section style={styles.education}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Education</h2>

        <div className="educationItem" style={styles.educationItem}>
          <FaGraduationCap style={styles.icon} />
          <h3 style={styles.degree}>M.Tech in Computer Science and Engineering</h3>
          <p style={styles.school}>International Institute of Information Technology, Hyderabad, 2023 - PRESENT</p>
          <p style={styles.description}>
            CGPA: 7.72
          </p>
        </div>

        <div className="educationItem" style={styles.educationItem}>
          <FaUniversity style={styles.icon} />
          <h3 style={styles.degree}>B.Tech in Computer Science and Engineering</h3>
          <p style={styles.school}>Noida Institute of Engineering and Technology, Greater Noida, 2021</p>
          <p style={styles.description}>
            CGPA: 8.83
          </p>
        </div>

        <div className="educationItem" style={styles.educationItem}>
          <FaSchool style={styles.icon} />
          <h3 style={styles.degree}>12th Grade</h3>
          <p style={styles.school}>Assisi Convent School, Etah , 2016</p>
          <p style={styles.description}>
            Completed with a focus on Science and Mathematics.
            <br />
            Marks: 93.8% | Grade: A
          </p>
        </div>

        <div className="educationItem" style={styles.educationItem}>
          <FaSchool style={styles.icon} />
          <h3 style={styles.degree}>10th Grade</h3>
          <p style={styles.school}>Assisi Convent School, Etah , 2014 </p>
          <p style={styles.description}>
            Completed with a broad curriculum.
            <br />
            CGPA: 9.4
          </p>
        </div>

      </div>
    </section>
  );
}

const styles = {
  education: {
    padding: '30px 0', // Reduced padding for the section
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1000px', // Increased width of the container
    margin: '0 auto',
    padding: '0 5px', // Reduced padding for responsiveness
  },
  heading: {
    fontSize: '2.4rem', // Slightly larger font size for heading
    marginBottom: '15px', // Reduced margin below heading
    color: '#333',
  },
  educationItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column', // Center the items
    width: '100%', // Increase the width of each component
    marginBottom: '15px', // Reduced margin between education items
    padding: '10px 0', // Reduced padding inside the item
    boxShadow: 'none', // Remove any additional shadow
    border: '1px solid #ddd', // Minimal border
  },
  icon: {
    fontSize: '1.8rem', // Same icon size
    color: '#007bff',
    marginBottom: '3px', // Slightly reduced space between icon and title
  },
  degree: {
    fontSize: '1.7rem', // Slightly larger font size
    color: '#444',
    marginBottom: '3px', // Reduced margin below degree
  },
  school: {
    fontSize: '1.2rem', // Slightly larger font size
    color: '#777',
    marginBottom: '5px', // Reduced margin below school
  },
  description: {
    fontSize: '1rem', // Same font size
    lineHeight: '1.4', // Same line height
    color: '#555',
  },
};

export default Education;
