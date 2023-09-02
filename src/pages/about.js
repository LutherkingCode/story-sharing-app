import React from 'react';
import styles from './about.module.css'; // Import the CSS module

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.heading}>About Us</h2>
      <p className={styles.description}>
        We are a dedicated team working to provide you with amazing content and experiences.
      </p>
    </div>
  );
}
