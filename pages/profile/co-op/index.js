import Head from "next/head";

//Styles
import { Content, Header } from "../../../components/layout/layout";
import Segment from "../../../components/layout/segment/segment";

//graphing
import StackedBar from "../../../components/charts/stackedbar";
import DoughnutChart from "../../../components/charts/doughnut";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>

        <Segment
          graph={<DoughnutChart datatype="Favourite Programming Language" />}
          onTop={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>
      </Content>
    </>
  );
}
