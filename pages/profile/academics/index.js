import Head from 'next/head';
import React from "react";
import Content from "../../../components/layout/layout"
import PieChart from "../../../components/charts/pieChart";

export default function Academics() {
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Content>
          <h1>Academics</h1>
          <PieChart datatype = 'Backup' />
      </Content>
    </>
  );
}
