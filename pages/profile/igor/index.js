import Head from 'next/head';

import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

export default function Igor() {
  return (
    <>
      <Head>
        <title>Igor • Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>Igor</h1>
      </div>
    </>
  );
}
