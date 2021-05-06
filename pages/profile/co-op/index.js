import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../profile.module.scss';
import { useEffect } from 'react';

// Layout
import { Content, Header } from "../../../components/layout/layout";
import NavigationCards, { Card } from "../../../components/navigation/cards";
import Segment from "../../../components/layout/segment/segment";

// Graphs
const BoxPlot = dynamic(() => import('../../../components/charts/boxPlot'));
const DoughnutChart = dynamic(() =>
  import('../../../components/charts/doughnutChart')
);
const MultiBar = dynamic(() => import('../../../components/charts/multiBar'));
const Scatterplot = dynamic(() =>
  import('../../../components/charts/scatterPlot')
);
const StackedBar = dynamic(() =>
  import('../../../components/charts/stackedBar')
);

export default function Coop() {
  useEffect(() => {
    window.scrollTo(0, document.querySelector("#content").offsetTop);
  })
  
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={'1A Class Profile'} />

      <Content className={styles.coop}>
        <h1>Co-op</h1>
        <h4>
          As of the end of SYDE 2025's first work term, SYDE had an employment rate of 99.1%. What type of jobs did they get? How much were they paid? How was how much they were paid correlated with anything?
        </h4>
        <Segment
          title="Co-op Round vs Type"
          graph={<StackedBar datatype="Coop Round vs Job Sector" />}
          onTop={false}
        >
          Most of the cohort have been employed in the software industry, like
          previous cohorts.
          <br />
          <b>Note</b>: The number of unhired people has decreased since this
          survey was taken, with currently one person being unemployed.
          <br />
          Software development (including QA) was the most popular sector for
          our cohort in every round, similar to the SYDE 2024 Cohort.
        </Segment>

        <Segment
          title="Programming Languages"
          graph={
          <>
          <DoughnutChart datatype="Favourite Programming Language" /> {' '}
          <BoxPlot datatype= "Favourite Programming Language vs Pay" />
          </>
        }
          onTop={true}
        >
          People who liked Python had the highest median hourly pay.
        </Segment>

        <Segment
          title="Parents in STEM vs Co-op Offer Round"
          graph={<MultiBar datatype="Parents STEM vs Coop Round" width={700} height={500} />}
          onTop={false}
        >
          The majority of people without parents working in a STEM position
          secured a job during the continuous round. Compared to those with
          parents in STEM, there is a large disparity with people getting jobs
          in earlier rounds.
        </Segment>

        <Segment
          title="Admission Average vs Co-op Salary"
          graph={<Scatterplot datatype="Admission Average vs Coop Salary" />}
          onTop={false}
        >
          Admission average and salary have a pearson correlation coefficient of
          0.006. This indicates no association and therefore no correlation
          between high school admission average and 1A coop salary.
          <br />
          <b>SYDE Opinion</b>: Employers don’t care about high school marks.
        </Segment>

        <Segment
          title="Co-op Pay vs 1A Average"
          graph={<BoxPlot datatype="1A Average vs Salary" />}
          onTop={false}
        >
          Doing better in school does not seem to correlate with getting paid
          more; the pearson correlation coefficient was 0.06. Note: 1A averages
          were not seen by employers during the coop hiring process; they were
          released after coop hiring.
        </Segment>

        <Segment
          title="Co-op Pay"
          graph={
            <>
            <BoxPlot datatype="Coop Round vs Pay"  width={400} height={450} /> {' '}
            <BoxPlot datatype="Coop Sector vs Pay"  width={520} height={500} />
            </>
          }
          onTop={true}
        >
          The average engineering coop salary for 1A students is $18.50/h.
          The SYDE 1A average coop salary was slightly higher, with students
          getting paid an average of $19.11/h.
        </Segment>

        <Segment
          title="Software Co-op vs SYDE 121 Grade"
          graph={<BoxPlot datatype="SYDE 121 Average vs Software Coop" />}
          onTop={false}
        >
          The median SYDE 121 (Digital Computation) grade for people who had a
          software coop was 97% compared to 92% for those who did not have a
          software coop.
        </Segment>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Card 
                 title={<>
                  Next:
                  <br />
                  Lifestyle
                  </>
            }
                link={"/profile/lifestyle#content"}
                svg={"/cards/lifestyle.svg"}
                relativeSize={1}
                bottomSect={true}
            />
          </div>

        </div>

      </Content>
    </>
  );
}
