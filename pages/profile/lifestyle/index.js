import Head from "next/head";

//styling
import { Content, Header } from "../../../components/layout/layout";
import Segment from "../../../components/layout/segment/segment";
import SectionTitle from "../../../components/layout/sectiontitle/sectiontitle";

//graphing
import DoughnutChart from "../../../components/charts/doughnut";
import Bar from "../../../components/charts/bar";

//writeup
import Text from "../../../text1A";

export default function Lifestyle() {
  return (
    <>
      <Head>
        <title>Lifestyle • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Lifestyle</h1>
      </Content>
    </>
  );
}
