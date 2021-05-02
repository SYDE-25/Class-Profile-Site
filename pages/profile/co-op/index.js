import Head from "next/head";

// Layout
import { Content, Header } from "../../../components/layout/layout";
import NavigationCards from "../../../components/navigation/cards";
import Segment from "../../../components/layout/segment/segment";

// Graphs
import StackedBar from "../../../components/charts/stackedbar";
import DoughnutChart from "../../../components/charts/doughnut";
import BoxPlot from "../../../components/charts/boxplot";

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={"1A Class Profile"}/>

      <Content>
        <h1>Co-op</h1>
        <Segment
          graph={<StackedBar datatype="Coop Round vs Job Sector" />}
          onTop={false}
        >
          Software development (including QA) was the most popular sector
          for our cohort in every round, similar to the SYDE 2024 Cohort [1].
        </Segment>

        <Segment
          graph={<DoughnutChart datatype="Favourite Programming Language" />}
          onTop={false}
        >
          People who liked Python had the highest median hourly pay.
        </Segment>

        <Segment
          graph={<BoxPlot datatype = "Coop Round vs Pay" />}
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
