import Head from 'next/head';

import Background from '../components/threejs/floatingRects';
import Header from '../components/header/header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>SYDE '25</title>
      </Head>

      <Header />

      <div className={styles.background}>
        <Background />
      </div>

      <div className={styles.banner}>
        <h1 className={styles.title}>Welcome to our class profile</h1>
        <h4 className={styles.description}>
          Head over to the profile page to see more
        </h4>
      </div>
    </>
  );
}
