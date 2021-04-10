import Head from 'next/head';
import Backup from "../../../components/charts/backup";
import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

export default function Academics() {
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>Academics</h1>
        <Backup/>
      </div>
    </>
  );
}
