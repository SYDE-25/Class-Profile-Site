import Head from 'next/head';
import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

import PieChart from "../../../components/charts/pieChart";

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>Demographics</h1>
        <PieChart datatype = 'Gender'/>
        <PieChart datatype = 'Hometown' />
        <PieChart datatype = 'Parental Education' />
        <PieChart datatype = 'Parents Born'/>
        <PieChart datatype = 'Parents Stem'/>
        <PieChart datatype = 'Religion'/>
        <PieChart datatype = 'Year Born'/>
      </div>
    </>
  );
}
