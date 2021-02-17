import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>SYDE '25</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.container}>
        <banner className={styles.banner}>
          <h1 className={styles.title}>Welcome to our class profile</h1>

          <p className={styles.description}>Keep scrolling to see more</p>
        </banner>

        <div className={styles.content}>
          <h1>More Content Here</h1>
        </div>
      </div>
    </>
  );
}
