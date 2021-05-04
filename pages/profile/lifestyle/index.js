import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../profile.module.scss';

// Layout
import NavigationCards, { Card } from "../../../components/navigation/cards";
import { Content, Header } from '../../../components/layout/layout';
import Segment from '../../../components/layout/segment/segment';

// Graphs
const MultiBar = dynamic(() => import('../../../components/charts/multiBar'));
const BoxPlot = dynamic(() => import('../../../components/charts/boxPlot'));
const DoughnutChart = dynamic(() =>
  import('../../../components/charts/doughnutChart')
);
const BarGraph = dynamic(() => import('../../../components/charts/barGraph'));

export default function Lifestyle() {
  return (
    <>
      <Head>
        <title>Lifestyle • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={'1A Class Profile'} />

      <Content className={styles.lifestyle}>
        <h1>Lifestyle</h1>
        <h4>How has SYDE managed during the 1A term? How much have they experienced? Have they experimented with drugs?</h4>

        <Segment
          title={'Location'}
          graph={<BarGraph datatype="Hometown vs Living On Campus" />}
          onTop={false}
        >
          The majority of people who lived on campus were Torontonians. Due to
          the pandemic, most of the class (about 75%) stayed home.
        </Segment>

        <Segment
          title={'Mental Health'}
          graph={
            <>
              <MultiBar datatype="Mental Health" />{' '}
              <BoxPlot datatype="1A Average vs Mental Health" />
            </>
          }
          onTop={true}
        >
          People who rated their mental health greater or equal to a 5 out of
          10, had a median average greater than 85%. However, people who rated
          their mental health to be a 1-3 out of 10 also had a median average
          greater than an 85%. Note: The number of people who rated their mental
          health in that range is less than those who rated their mental health
          a higher score.
        </Segment>

        <Segment
          title={'Time Outdoors'}
          graph={
            <BoxPlot datatype="Mental Health During Term vs Days Outside" />
          }
          onTop={false}
        >
          Note: This was a fully online school term - yes, it was possible to go
          outside 0 days/week.
        </Segment>

        <Segment
          title={'Sleep'}
          graph={
            <>
              <BarGraph datatype="Sleep" />{' '}
              <BoxPlot datatype="Sleep vs Mental Health" />
            </>
          }
          onTop={true}
        >
          The number of hours of sleep does not seem to have an effect on mental
          health, as seen with the median mental health scores.
        </Segment>

        <Segment
          title={'Substance Use'}
          graph={<BarGraph datatype="Drugs" />}
          onTop={true}
        ></Segment>

        <Segment
          title={'Drug Use Compared to 1A Average'}
          graph={<BoxPlot datatype="Drug Usage vs 1A Average" />}
          onTop={false}
        >
          According to the mean average of those who used and did not use drugs,
          it seems as though the use of such substances does not correlate much
          with how well they perform in school. However, there are quite a few
          noticeable low scoring outliers with people who did not consume drugs,
          while those who have does not have any particular low scoring
          outliers.
        </Segment>

        <Segment
          title={'Drug Use & Coop Rates'}
          graph={<MultiBar datatype="Drugs vs Coop Round" />}
          onTop={false}
        >
          The majority of people who consumed drugs, about 19%, got a job during
          the continuous round. Similarly, the majority of people who did not
          consume drugs got a job during the continuous round, that being about
          20%.
        </Segment>

        <Segment
          title={'Virginity'}
          graph={
            <>
              <DoughnutChart datatype="Virginity" />{' '}
              <MultiBar datatype="Virginity vs Drug Use" />{' '}
            </>
          }
          onTop={true}
        ></Segment>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Card 
                title={<>
                      Next:
                      <br />
                      Igor
                      </>}
                link={"/profile/igor#content"}
                svg={"/cards/igor.svg"}
                relativeSize={1}
                bottomSect={true}
            />
          </div>
         </div>
      </Content>
    </>
  );
}
