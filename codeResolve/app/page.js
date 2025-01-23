import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            src="/codeResolve.png"  
            alt="Code Resolve Logo"
            width={150}
            height={150}
            className={styles.logo}
            priority
          />

          <h1 className={styles.title}>Welcome to Code Resolve</h1>
          <p className={styles.subtitle}>
            Join us to explore exciting activities and opportunities at our school club.
          </p>

          <Link href="/about-us" className={styles.cta}>
            Learn More About Us
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          <p className={styles.sectionText}>
            Learn more about our coding workshops, hackathons, and fun club meetups!
          </p>
          <Link href="/events" className={styles.linkButton}>
            View Events
          </Link>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects & Competitions</h2>
          <p className={styles.sectionText}>
            Collaborate with like-minded peers on awesome projects and code challenges.
          </p>
          <Link href="/projects" className={styles.linkButton}>
            Explore Projects
          </Link>
        </section>
      </main>

    </div>
  );
}
