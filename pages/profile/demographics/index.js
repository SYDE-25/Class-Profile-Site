import Head from "next/head";
import { Content, Header } from "../../../components/layout/layout";

import PieChart from "../../../components/charts/pieChart";

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Demographics</h1>
        <PieChart datatype="Gender" />
        <PieChart datatype="Hometown" />
        <PieChart datatype="Parental Education" />
        <PieChart datatype="Parents Born" />
        <PieChart datatype="Parents Stem" />
        <PieChart datatype="Religion" />
        <PieChart datatype="Year Born" />
      </Content>
    </>
  );
}
