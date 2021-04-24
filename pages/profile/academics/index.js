import Head from "next/head";
import React from "react";
//styles
import { Content, Header } from "../../../components/layout/layout";
import Segment from "../../../components/layout/segment/segment";

//graphing
import DoughnutChart from "../../../components/charts/doughnut";
import Scatterplot from "../../../components/charts/scatterplot";
import Bar from "../../../components/charts/bar";

//writeup
import Text from "../../../text1A";

export default function Academics() {
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Academics</h1>
        <Segment
          title="Backup University"
          graph={<DoughnutChart datatype="Backup" />}
          onTop={false}
        ></Segment>

        <Segment
          title="Course Average vs Time Spent"
          graph={<Scatterplot datatype="Course Average vs Time Spent" />}
          onTop={false}
        >
          {Text.text.academics.COURSE_AVERAGE_VS_TIME_SPENT_TEXT}
        </Segment>

        <Segment
          title="Course Usefulness vs Difficulty"
          graph={<Scatterplot datatype="Course Usefulness vs Difficulty" />}
          onTop={false}
        >
          {Text.text.academics.DIFFICULTIES_VS_USEFULNESS_TEXT}
        </Segment>

        <Segment
          title="Course Average vs Difficulty"
          graph={<Scatterplot datatype="Course Average vs Difficulty" />}
          onTop={false}
        >
          {Text.text.academics.DIFFICULTY_VS_COURSE_AVERAGE_TEXT}
        </Segment>

        <Segment
          title="Course Average vs Difficulty"
          graph={
            <Scatterplot datatype="Time Spent in Course vs Course Difficulty" />
          }
          onTop={false}
        ></Segment>
      </Content>
    </>
  );
}
