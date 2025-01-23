'use client';

import Link from 'next/link'; // Import the Link component
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome to Code Resolve</h1>
      <p className={styles.paragraph}>
        Join us to explore exciting activities and opportunities at our school club.
      </p>
      <Link href="/about-us" className={styles.button}>
        Learn More About Us
      </Link>
    </div>
  );
}
