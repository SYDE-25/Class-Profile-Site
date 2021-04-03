import Head from 'next/head';
import Header from '../components/header';
import styles from '../styles/Home.module.scss';
import Link from  "next/link";
import Background from '../components/threejs/floatingRects';


export default function Home() {
  return (
    <>
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
        <Background />
        <div className={styles.content}>
          <h1>More Content Here</h1>
          
          <Link href = "./cards/demographics/Demographics">
              Demographics
          </Link>
          
          <Link href = "./cards/highschool/Highschool">
            Highschool
          </Link>

          <Link href = "./cards/coop/Coop">
              Coop
          </Link>

          <Link href = "./cards/lifestyle/Lifestyle">
              Lifestyle
          </Link>

          <Link href = "./cards/academics/Academics">
              Academics
          </Link>

          <Link href = "./cards/igor/Igor">
              Igor
          </Link>

        </div>
      </div>
    </>
  );
}
