import Head from "next/head";

// Layout
import { Content, Header } from "../../../components/layout/layout";
import NavigationCards from "../../../components/navigation/cards";
import Segment from "../../../components/layout/segment/segment";
import SectionTitle from "../../../components/layout/sectiontitle/sectiontitle";

// Graphs
import DoughnutChart from "../../../components/charts/doughnut";
import Bar from "../../../components/charts/bar";

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={"1A Class Profile"}/>

      <Content>
        <h1>Demographics</h1>

        <SectionTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionTitle>

        <Segment title="Gender" graph={<DoughnutChart datatype="Gender" />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>
        <Segment title="Hometown" graph={<Bar datatype="Hometown" />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>

        <Segment
          title="Parents"
          graph={<DoughnutChart datatype="Parents Born" />}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>
        <Segment
          graph={
            <>
              <DoughnutChart datatype="Parental Education" />
              <DoughnutChart datatype="Parents Stem" />
            </>
          }
          onTop={true}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>

        <Segment
          title="Year Born"
          graph={<DoughnutChart datatype="Year Born" />}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>

        <Segment
          title="Sexuality"
          graph={<Bar datatype="Sexuality" />}
          onTop={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>

        <Segment title="Religion" graph={<Bar datatype="Religion" />}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>

        <Segment
          title="Political Alignment of SYDE 2025"
          graph={<Bar datatype="Political Alignment" />}
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
