import Head from 'next/head';
import Header from '../components/header';
import styles from '../styles/Home.module.scss';
import Link from  "next/link";
import Background from '../components/threejs/floatingRects';


export default function Home() {
  return (
    <div>
      <Head>
        <title>SYDE '25</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className={styles.banner}>
        <h1 className={styles.title}>Welcome to our class profile</h1>
        <h3 className={styles.description}>
          Head over to the profile page to see more
        </h3>
        </div>
        
      <div className={styles.background}>
      <Link href = "./profiles/Profile" >
              <a>Profile</a>
          </Link>
          <Background/>
        <div className={styles.content}>
        
         <h3>More Content Here</h3>
        </div>
      </div>
    </div>
  );
}
