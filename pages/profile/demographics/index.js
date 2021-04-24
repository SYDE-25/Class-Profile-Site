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

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

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
          {Text.text.demographics.GENDER_TEXT}
        </Segment>
        <Segment title="Hometown" graph={<Bar datatype="Hometown" />}>
          {Text.text.demographics.HOMETOWN_TEXT}
        </Segment>

        <Segment
          title="Parents"
          graph={<DoughnutChart datatype="Parents Born" />}
        >
          {Text.text.demographics.PARENTS_BORN_TEXT}
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
          {Text.text.demographics.PARENTAL_EDUCATION_TEXT}
          {Text.text.demographics.PARENTS_STEM_TEXT}
        </Segment>

        <Segment
          title="Year Born"
          graph={<DoughnutChart datatype="Year Born" />}
        >
          {Text.text.demographics.YEAR_BORN_TEXT}
        </Segment>

        <Segment
          title="Sexuality"
          graph={<Bar datatype="Sexuality" />}
          onTop={false}
        >
          {Text.text.demographics.SEXUALITY_TEXT}
        </Segment>

        <Segment title="Religion" graph={<Bar datatype="Religion" />}>
          {Text.text.demographics.RELIGION_TEXT}
        </Segment>

        <Segment
          title="Political Alignment of SYDE 2025"
          graph={<Bar datatype="Political Alignment" />}
        >
          {Text.text.demographics.POLITICAL_ALIGNMENT_TEXT}
        </Segment>
      </Content>
    </>
  );
}
