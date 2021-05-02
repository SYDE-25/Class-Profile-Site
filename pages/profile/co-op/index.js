import Head from "next/head";
import styles from '../profile.module.scss';

// Layout
import { Content, Header } from "../../../components/layout/layout";
import NavigationCards from "../../../components/navigation/cards";
import Segment from "../../../components/layout/segment/segment";

// Graphs
import StackedBar from "../../../components/charts/stackedbar";
import DoughnutChart from "../../../components/charts/doughnut";
import BoxPlot from "../../../components/charts/boxplot";
import SideBar from "../../../components/charts/sidebysidebars";

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={"1A Class Profile"}/>

      <Content className={styles.coop}>
        <h1>Co-op</h1>
        <Segment
          title = "CO-OP Round VS Type of CO-OP"
          graph={<StackedBar datatype="Coop Round vs Job Sector" />}
          onTop={false}
        >
          Most of the cohort have been employed in the software industry, like previous cohorts [1][2].
          <br />
          <b>Note</b>: The number of unhired people has decreased since this survey was taken,
          with currently one person being unemployed [5].
          <br />
          Software development (including QA) was the most popular sector
          for our cohort in every round, similar to the SYDE 2024 Cohort [1].
        </Segment>

        <Segment 
          title = "Favourite Programming Language VS Pay"
          graph={<DoughnutChart datatype="Favourite Programming Language" />}
          onTop={false}
        >
          People who liked Python had the highest median hourly pay.
        </Segment>

        <Segment 
          title = "People With Parents In STEM VS CO-OP Offer Round"
          graph={<SideBar datatype = "Parents STEM vs Coop Round"/>}
          onTop={false}
        >
          The majority of people without parents working in a STEM position 
          secured a job during the continuous round.
          Compared to those with parents in STEM, there is a large disparity 
          with people getting jobs in earlier rounds. 
        </Segment>

        <Segment 
          title = "Co-op Pay vs 1A Average"
          graph={<BoxPlot datatype = "1A Average vs Salary"/>}
          onTop={false}
        >
          Doing better in school does not seem to correlate with getting paid more; 
          the pearson correlation coefficient was 0.06. 
          Note: 1A averages were not seen by employers during the coop hiring process; 
          they were released after coop hiring. 

        </Segment>

        <Segment 
          title = "Coop Pay vs Round"
          graph={<BoxPlot datatype = "Coop Round vs Pay"/>}
          onTop={false}
        >
          The average engineering coop salary for 1A students is $18.50/h [6].
          The SYDE 1A average coop salary was slightly higher, with students 
          getting paid an average of $19.11/h. 

        </Segment>

        <Segment 
          title = "Co-op Sector vs Pay"
          graph={<BoxPlot datatype = "Coop Sector vs Pay"/>}
          onTop={true}
        >
        </Segment>
      </Content>
    </>
  );
}
