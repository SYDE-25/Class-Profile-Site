import Head from "next/head";
//Styles
import { Content, Header } from "../../../components/layout/layout";
import Segment from "../../../components/layout/segment/segment";

//graphing
import StackedBar from "../../../components/charts/stackedbar";
import DoughnutChart from "../../../components/charts/doughnut";

//writeup
import Text from "../../../text1A";

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Header />
      <Content>
        <h1>Co-op</h1>
        <Segment
          graph={<StackedBar datatype="Coop Round vs Job Sector" />}
          onTop={false}
        >
          {Text.text.coop.COOP_ROUND_VS_TYPE_TEXT}
        </Segment>

        <Segment
          graph={<DoughnutChart datatype="Favourite Programming Language" />}
          onTop={false}
        >
          {Text.text.coop.FAVOURITE_PROGRAMMING_LANGUAGE}
        </Segment>
      </Content>
    </>
  );
}
