import Head from "next/head";
import React from "react";
import { Content, Header } from "../../../components/layout/layout";

export default function Academics() {
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Academics</h1>
        <PieChart datatype="Hometown" />
      </Content>
    </>
  );
}
