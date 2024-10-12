// src/components/About.js
import React, { useEffect, useState } from 'react';
import './About.css'; // Import the CSS file for styles
import { FaUserCircle } from 'react-icons/fa'; // Import an icon

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState(''); // State for the paragraph

  const text = "With a passion for building web applications and exploring cutting-edge technologies, I am a skilled back-end developer with comprehensive full-stack web development expertise. I am dedicated to creating scalable web applications while continuously learning and adapting to the latest advancements in the ever-evolving field of Information Technology. With a keen eye for detail and a commitment to excellence, I am excited to leverage my skills to deliver impactful solutions and contribute to dynamic projects that make a difference in the tech landscape.";

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      const { top } = section.getBoundingClientRect();
      if (top < window.innerHeight && !isVisible) { // Trigger typing when section is visible
        setIsVisible(true);
        typeText(text, setDisplayedText, 0); // Start typing the paragraph
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]); // Add isVisible to the dependency array

  // Function to type text character by character
  const typeText = (text, setDisplayedText, index) => {
    if (index < text.length) {
      setDisplayedText((prev) => prev + text[index]);
      setTimeout(() => typeText(text, setDisplayedText, index + 1), 25); // Adjust delay as needed
    }
  };

  return (
    <section
      id="about"
      style={{ ...styles.about, backgroundImage: 'url("path_to_your_background_image.jpg")' }} // Add a background image
    >
      <div style={styles.container}>
        <FaUserCircle style={styles.icon} /> {/* User icon */}
        <h2 style={{ ...styles.heading, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', transition: 'opacity 0.5s ease, transform 0.5s ease' }}>
          About Me
        </h2>
        <p style={{ 
            ...styles.text, 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)', 
            transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s' 
          }}>
          {displayedText}
        </p>
      </div>
    </section>
  );
}

const styles = {
  about: {
    backgroundColor: '#fff',
    backgroundSize: 'cover', // Cover the entire section
    backgroundPosition: 'center',
    padding: '60px 0', // Add vertical padding for more space
    textAlign: 'center', // Center align text
    color: '#444', // Default text color
  },
  container: {
    maxWidth: '990px',
    margin: '0 auto',
    padding: '0 10px', // Padding for responsiveness
    position: 'relative', // Position relative for the icon
    zIndex: 1, // Ensure text is above the background
  },
  icon: {
    fontSize: '4rem',
    color: '#ff9800', // Icon color
    marginBottom: '20px', // Space between icon and heading
    animation: 'bounce 1s infinite', // Simple bounce animation
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px', // Reduced margin for the heading
    opacity: 0, // Start invisible, transition will handle opacity
  },
  text: {
    fontSize: '1.5rem', // Increased font size
    lineHeight: '1.6', // Slightly adjusted line height
    margin: '0 0 10px 0', // Reduced margin for paragraphs
    padding: '0', // No padding
    color: '#555',
    textAlign: 'center', // Align text to the center for better readability
    transition: 'color 0.3s ease',
  },
};

export default About;
