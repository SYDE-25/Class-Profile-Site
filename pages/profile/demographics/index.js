import Head from "next/head";
import { Content, Header } from "../../../components/layout/layout";
import DoughnutChart from "../../../components/charts/doughnut";
import { text } from "../../../text1A";

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Demographics</h1>
        <DoughnutChart datatype="Gender" />
        <DoughnutChart datatype="Hometown" />
        <DoughnutChart datatype="Parental Education" />
        <DoughnutChart datatype="Parents Born" />
        <DoughnutChart datatype="Parents Stem" />
        <DoughnutChart datatype="Religion" />
        <DoughnutChart datatype="Year Born" />
      </Content>
    </>
  );
}
