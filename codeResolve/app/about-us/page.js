'use client';

import { useState, useEffect } from 'react';
import styles from '../../styles/about.module.css';
import Counter from '../../components/Counter'; // Import the Counter component

export default function AboutUs() {
  const [message, setMessage] = useState(''); // State to store the API response

  // Fetch the API on page load
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch('/api/hello'); // Call the hello API
        if (response.ok) {
          const data = await response.json();
          setMessage(data.message); // Update the state with the API response
        } else {
          setMessage('Failed to fetch message.');
        }
      } catch (error) {
        console.error('Error fetching the message:', error);
        setMessage('An error occurred.');
      }
    };

    fetchMessage(); // Call the function
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.paragraph}>
        We are a group of passionate students dedicated to making a difference in our school and community.
        Our mission is to inspire, educate, and create lasting memories together.
      </p>
      {/* Display the API message */}
      <p className={styles.paragraph}>
        <strong>Message from the API:</strong> {message}
      </p>

      {/* Add the Counter Component */}
      <section className={styles.section}>
        <h2 className={styles.heading}>Interactive Counter</h2>
        <Counter />
      </section>

      <a href="/" className={styles.link}>Go Back Home</a>
    </div>
  );
}
