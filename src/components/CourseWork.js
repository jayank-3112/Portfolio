// src/components/CourseWork.js
import React, { useState } from 'react';
import { FaLaptopCode, FaDatabase, FaRobot, FaBrain, FaDesktop, FaNetworkWired, FaMicrochip, FaChartLine, FaBars, FaCode } from 'react-icons/fa';

const courseData = [
  { title: 'Web Development Bootcamp', description: 'A comprehensive bootcamp focusing on HTML, CSS, JavaScript, and React.', icon: <FaLaptopCode /> },
  { title: 'Operating System', description: 'Learned about Process Management, CPU Scheduling, Memory Management, and File Systems.', icon: <FaDesktop /> },
  { title: 'Database Management System', description: 'Studied relational databases, SQL, and data modeling.', icon: <FaDatabase /> },
  { title: 'Computer Networks', description: 'Explored network architectures, protocols, and security.', icon: <FaNetworkWired /> },
  { title: 'Compiler Design', description: 'Various Types of Parsers, Syntax Directed Translations, Directed Acyclic Graph(DAG), Control Flow Graph etc.', icon: <FaCode /> },
  { title: 'Computer Architecture', description: 'Understanding CPU design, memory hierarchy, and instruction sets.', icon: <FaMicrochip /> },
  { title: 'Statistical Methods in Artificial Intelligence', description: 'Applied statistical techniques for data analysis and modeling in AI.', icon: <FaChartLine /> },
  { title: 'Data Structures', description: 'Learned about arrays, linked lists, stacks, queues, trees and graphs.', icon: <FaBars /> },
  { title: 'Algorithms', description: 'Studied sorting, searching, and optimization algorithms.', icon: <FaCode /> },
  
];

function CourseWork() {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <section style={styles.courseWork}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Course Work</h2>
        
        <div style={styles.courseList}>
          {courseData.map((course, index) => (
            <div
              key={index}
              style={{
                ...styles.courseCard,
                ...(hoveredCourse === course.title ? styles.courseCardHover : {}),
              }}
              onMouseEnter={() => setHoveredCourse(course.title)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div style={styles.icon}>{course.icon}</div>
              <h3 style={styles.courseTitle}>{course.title}</h3>
              <p
                style={{
                  ...styles.courseDescription,
                  opacity: hoveredCourse === course.title ? 1 : 0, // Control visibility with opacity
                  transition: 'opacity 0.3s ease', // Smooth transition for opacity
                }}
              >
                {course.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = {
  courseWork: {
    backgroundColor: '#ffffff',
    padding: '20px 0', // Reduced padding
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1000px', // Increased width of the container
    margin: '0 auto',
    padding: '0 10px', // Reduced padding for more content width
  },
  heading: {
    fontSize: '2rem', // Reduced font size
    marginBottom: '15px', // Reduced margin for the heading
    color: '#333',
  },
  courseList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Increased minimum width of the cards
    gap: '15px', // Reduced gap between course cards
  },
  courseCard: {
    background: 'linear-gradient(to bottom right, #e0f7fa, #fce4ec)',
    borderRadius: '8px',
    padding: '15px', // Reduced padding in cards
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Lighter shadow
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    transform: 'scale(1)',
  },
  icon: {
    fontSize: '1.8rem', // Reduced icon size
    marginBottom: '8px',
    color: '#00796b',
  },
  courseTitle: {
    fontSize: '1.3rem', // Reduced title size
    marginBottom: '8px',
    color: '#444',
  },
  courseDescription: {
    fontSize: '0.9rem', // Reduced description size
    color: '#555',
    marginTop: '8px',
    opacity: 0, // Start hidden
    transition: 'opacity 0.3s ease',
  },
  courseCardHover: {
    transform: 'scale(1.05)', // Slight hover effect
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // More prominent shadow on hover
  },
};

export default CourseWork;
