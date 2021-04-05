import Head from 'next/head';

import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

export default function Lifestyle() {
  return (
    <>
      <Head>
        <title>Lifestyle • Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>Lifestyle</h1>
      </div>
    </>
  );
}
