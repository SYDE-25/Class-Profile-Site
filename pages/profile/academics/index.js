import Head from "next/head";
import React from "react";

// Layout
import { Content, Header } from "../../../components/layout/layout";
import NavigationCards from "../../../components/navigation/cards";
import Segment from "../../../components/layout/segment/segment";

//graphing
import {HistogramPercent, HistogramCount} from "../../../components/charts/histogram";
import DoughnutChart from "../../../components/charts/doughnut";
import Scatterplot from "../../../components/charts/scatterplot";
import Bar from "../../../components/charts/bar";

export default function Academics() {
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={"1A Class Profile"}/>

      <Content>
        <h1>Academics</h1>

        <Segment
          title="1A Average"
          graph={
            <HistogramPercent datatype="1A Class Average" />
          }
          onTop={false}
        ></Segment>

        <Segment
          title="Avg Dropoff"
          graph={
            <HistogramCount datatype="Admission Average Drop Off" />
          }
          onTop={false}
        ></Segment>
        
        <Segment
          title="HS Average"
          graph={
            <HistogramCount datatype="HS Average" />
          }
          onTop={false}
        ></Segment>

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>

        <Segment
          title="Course Usefulness vs Difficulty"
          graph={<Scatterplot datatype="Course Usefulness vs Difficulty" />}
          onTop={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>

        <Segment
          title="Course Average vs Difficulty"
          graph={<Scatterplot datatype="Course Average vs Difficulty" />}
          onTop={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
