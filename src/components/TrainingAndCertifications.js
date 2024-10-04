// src/components/TrainingAndCertifications.js
import React from 'react';
import { FaCertificate } from 'react-icons/fa';

function TrainingAndCertifications() {
  const certificationsData = [
    { certification: "NPTEL Online Certification in Database Management Systems with aggregate score of 84% (Elite-Top 5%).", link: "https://nptel.ac.in/certificates/DBMS" },
    { certification: "Completed an Online Training on Full Stack Web Development using Python and Django.", link: "https://example.com/fullstack-python-django" },
    { certification: "Completed a Course on OOPs Concept of C++ by Great Learning.", link: "https://greatlearning.com/oops-cpp" },
    { certification: "Completed a Course on Python(Basic) by HackerRank.", link: "https://hackerrank.com/python-basic" },
    { certification: "Certified 'MongoDB Developer' from NoSQL Experts (2023).", link: "https://nosqlexperts.com/mongodb-developer" },
  ];

  return (
    <section style={styles.certifications}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Training & Certifications</h2>
        {certificationsData.map((item, index) => (
          <div key={index} className="certificationItem" style={styles.certificationItem}>
            <FaCertificate style={styles.icon} />
            <div style={styles.textContainer}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                <p style={styles.description}>{item.certification}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  certifications: {
    padding: '10px 0',
    textAlign: 'center',
    backgroundColor: '#e3f2fd',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '100%', // Full-width container
    margin: '0 10px', // Reduced margin on left and right sides
    padding: '0 10px', // Reduce padding on the sides
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#555',
    fontWeight: 'bold',
  },
  certificationItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    justifyContent: 'flex-start',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '2.5rem',
    color: '#42a5f5',
    marginRight: '20px',
  },
  textContainer: {
    textAlign: 'left',
  },
  description: {
    fontSize: '1.4rem',
    lineHeight: '1.8',
    color: '#555',
    margin: '0',
  },
  link: {
    textDecoration: 'none',
    color: '#1565c0',
    transition: 'color 0.3s',
  },
};

export default TrainingAndCertifications;
