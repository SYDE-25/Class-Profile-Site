import Head from 'next/head';
import PieChart from "../../../components/charts/pieChart";
import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Header />

      < div className={styles.content}>
        <h1>Co-op</h1>
        <PieChart datatype = 'Coop Round' />
      </div>
    </>
  );
}
