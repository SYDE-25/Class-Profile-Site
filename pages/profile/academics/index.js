import Head from "next/head";
import React from "react";
import { Content, Header } from "../../../components/layout/layout";

import DoughnutChart from "../../../components/charts/doughnut";

export default function Academics() {
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Academics</h1>
        <DoughnutChart datatype="Hometown" />
      </Content>
    </>
  );
}
