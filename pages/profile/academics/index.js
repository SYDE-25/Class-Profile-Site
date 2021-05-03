import Head from "next/head";
import styles from '../profile.module.scss';

// Layout
import { Content, Header } from "../../../components/layout/layout";
import NavigationCards from "../../../components/navigation/cards";
import Segment from "../../../components/layout/segment/segment";

//graphing
import { HistogramPercent, HistogramCount } from "../../../components/charts/histogram";
import DoughnutChart from "../../../components/charts/doughnut";
import Scatterplot from "../../../components/charts/scatterplot";
import Bar from "../../../components/charts/bar";
import BoxPlot from '../../../components/charts/boxplot';

export default function Academics() {
  return (
    <>
      <Head>
        <title>Academics • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={"1A Class Profile"} />

      <Content className={styles.academics}>
        <h1>Academics</h1>

        <Segment
          title="1A Average"
          graph={
            <HistogramPercent datatype="1A Class Average" />
          }
          onTop={false}
        >
          This year engineering rankings were removed for the first time and instead, a grade relative-frequency histogram was provided by UW.
          <br />
          <br />
          To keep inline with these efforts, the same histogram was created with the data from those who answered the class profile survey (class profile histogram above, histogram from <a href='https://engug.uwaterloo.ca/results'>https://engug.uwaterloo.ca/results</a> below).
          <br />
          <br />
          Evidently, the class profile data has a higher frequency of averages in the 80-89% range as well as the 90-100% range (and less in the other two ranges). This means that data analysis in this report done with grades is skewed slightly upwards - it seems many of the people who did not respond to the survey had averages in the 60-79% range.

        </Segment>

        <Segment
          title="Backup University"
          graph={<Bar datatype="Backup" />}
          onTop={true}
        >

        </Segment>

        <Segment
          title="HS Average"
          graph={
            <HistogramCount datatype="HS Average" />
          }
          onTop={false}
        >The admission average was in the mid 90s - slightly higher than the “high 80s to low 90s” [3] currently on the admissions website. Lots of smarties in SYDE!</Segment>

      <Segment
        title="1A Average vs HS Average"
        graph={
          <BoxPlot datatype="Admission Average vs 1A Average" />
        }
        onTop={false}
      >The Pearson Correlation Coefficient between admission average and 1A average was about 0.16. This would indicate that there is a small association [4] between admission average and 1A average. 
      </Segment>

      <Segment
        title="1A Average vs HS Program"
        graph={
          <BoxPlot datatype="1A Class Average vs HS Program" />
        }
        onTop={true}
      >
      </Segment>

      <Segment
          title="Avg Dropoff"
          graph={
            <HistogramCount datatype="Admission Average Drop Off" />
          }
          onTop={false}
        >
          Academic drop-off is calculated by: 1A average - admission average.
          <br />
          <br />
          The median drop-off was 5.6%. Last year, the median drop-off was 15.9% [1].
          <br />
          <br />
          Note: The Fall 2020 term took place online.

        </Segment>


        <Segment
        title="Course Usefulness vs Difficulty"
        graph={<Scatterplot datatype="Course Usefulness vs Difficulty" />}
        onTop={false}
      >
        Usefulness and difficulty have a 0.27 spearman correlation coefficient, indicating a moderate positive relationship (The harder it is, the more useful it is).
        <br/>
        <br/>
        The easiest rated course was SYDE 101 (Communications in Systems Design Engineering-Written and Oral), and the hardest was SYDE 111 (Fundamental Engineering Math 1).
        <br/>
        <br/>
        The most useful rated course was SYDE 121 (Digital Computation) , and the least useful rated was SYDE 101 (Communications in Systems Design Engineering-Written and Oral).
        </Segment>
        <Segment
        title="Course Average vs Difficulty"
        graph={<Scatterplot datatype="Course Average vs Difficulty" />}
        onTop={false}
      >
        The easiest course on average was SYDE 101 (Communications in Systems Design Engineering-Written and Oral),  which also had a high average (91.5%).
        <br />
        <br />
        The hardest course was SYDE 111 (Fundamental Engineering Math 1) on average, which also had the lowest average (85.2%).
        Course average and difficulty have a -0.32 spearman correlation coefficient, indicating a moderate negative relationship (The higher the average, the easier the course was).

      </Segment>

      <Segment
        title="Difficulty vs Amount of lectures attended"
        graph={
          <Scatterplot datatype="Time Spent in Course vs Course Difficulty" />
        }
        onTop={true}
      ></Segment>

      <Segment
        title="Course Average vs Time Spent"
        graph={<Scatterplot datatype="Course Average vs Time Spent" />}
        onTop={false}
      >
        Number of lectures attended, and difficulty have a 0.20 spearman correlation coefficient, indicating a moderate positive relationship (The higher the difficulty of the course, the more lectures that were attended.
        <br />
        <br />
        SYDE 181 (Physics 1 : Statics) had the highest percentage of lectures attended at around 80%, and SYDE 161 (Introduction to Design)  had the lowest percentage of lectures attended at around 45%.
        </Segment>



    </Content>
    </>
  );
}
