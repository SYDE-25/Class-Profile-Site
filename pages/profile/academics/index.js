import Head from "next/head";
import React from "react";
import { Content, Header } from "../../../components/layout/layout";
import DoughnutChart from "../../../components/charts/doughnut";
import Segment from "../../../components/layout/segment/segment"

export default function Academics() {

  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Academics</h1>
        <Segment title="Hometown" graph={<DoughnutChart datatype="Hometown"/>} onTop={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Segment>
      </Content>
    </> 
  );
}
