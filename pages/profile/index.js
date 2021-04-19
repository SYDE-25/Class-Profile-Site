import Head from 'next/head';
import Link from 'next/link';

import Header from '../../components/header/header';
import styles from './profilePage.module.scss';

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>Profile</h1>
        <div className={styles.card}>
          <Link href="profile/demographics">
            <div className={styles.demographics}><h3>Demographics</h3></div>
          </Link>
          <Link href="profile/high-school">
            <div className={styles.academics}><h3>Academics</h3></div>
          </Link>
          <Link href="profile/co-op">
            <div className={styles.coop}><h3>Co-op</h3></div>
          </Link>
          <Link href="profile/lifestyle">
            <div className={styles.lifestyle}><h3>Lifestyle</h3></div>
          </Link>
          <Link href="profile/academics">
            <div className={styles.highschool}><h3>High School</h3></div>
          </Link>
          <Link href="profile/igor">
            <div className={styles.igor}><h3>Igor</h3></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
