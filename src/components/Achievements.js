// src/components/Achievements.js
import React from 'react';
import { FaTrophy } from 'react-icons/fa';

function Achievements() {
  const achievementsData = [
    { achievement: "Got 98 Percentile in GATE 2023 Computer Science paper among 75680 candidates." },
    { achievement: "Awarded Letter of Appreciation on achieving 91% score in 1st Semester (B.Tech)." },
    { achievement: "Awarded School Subject Topper in English Core with a score of 97% in 12th (CBSE)." },
    { achievement: "Awarded School Subject Topper in Mathematics with a score of 95% in 12th (CBSE)." },
  ];

  return (
    <section style={styles.achievements}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Achievements</h2>

        {achievementsData.map((item, index) => (
          <div key={index} className="achievementItem" style={styles.achievementItem}>
            <FaTrophy style={styles.icon} />
            <div style={styles.textContainer}>
              <p style={styles.description}>{item.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  achievements: {
    padding: '10px 0',
    textAlign: 'center',
    // backgroundColor: '#f9f9f9',
    backgroundColor: '#e3f2fd',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '100%', // Set the container to take full width
    margin: '0 10px', // Minimal left and right margin to reduce space
    padding: '0 10px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
    fontWeight: 'bold',
  },
  achievementItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    justifyContent: 'flex-start',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '1.8rem',
    color: '#ff9800',
    marginRight: '15px',
  },
  textContainer: {
    textAlign: 'left',
  },
  description: {
    fontSize: '1.6rem',
    lineHeight: '1.6',
    color: '#555',
    margin: '0',
  },
};

export default Achievements;
