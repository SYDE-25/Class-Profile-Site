<<<<<<< HEAD
import Head from 'next/head';
import React from "react";
import Content from "../../../components/layout/layout"
import PieChart from "../../../components/charts/pieChart";
=======
import Head from "next/head";
import React from "react";
import { Content, Header } from "../../../components/layout/layout";
import DoughnutChart from "../../../components/charts/doughnut";
>>>>>>> develop

export default function Academics() {
  
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

<<<<<<< HEAD
      <Content>
          <h1>Academics</h1>
          <PieChart datatype = 'Backup' />
=======
      <Header />

      <Content>
        <h1>Academics</h1>
        <DoughnutChart datatype="Hometown" />
>>>>>>> develop
      </Content>
    </>
  );
}
