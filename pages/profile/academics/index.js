import Head from 'next/head';
import React from "react";
import Contentlayout from "../../../components/contentlayout/contentlayout"
import PieChart from "../../../components/charts/pieChart";

export default function Academics() {
  
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Contentlayout>
          <h1>Academics</h1>
          <PieChart datatype = 'Backup' />
      </Contentlayout>
    </>
  );
}
