import Head from 'next/head';
import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';
import React from "react";

import PieChart from "../../../components/charts/pieChart";

export default function Academics() {
  
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>Academics</h1>
        <PieChart datatype = 'Backup' />
      </div>
    </>
  );
}
