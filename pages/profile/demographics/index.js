import Head from 'next/head';

import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>Demographics</h1>
      </div>
    </>
  );
}
