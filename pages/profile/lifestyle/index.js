import Head from 'next/head';
import styles from '../profile.module.scss';

// Layout
import NavigationCards from '../../../components/navigation/cards';
import { Content, Header } from '../../../components/layout/layout';
import Segment from '../../../components/layout/segment/segment';
import SideBar from '../../../components/charts/sidebysidebars';
import BoxPlot from '../../../components/charts/boxplot';
import DoughnutChart from '../../../components/charts/doughnut';
import Bar from '../../../components/charts/bar';

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

        <Segment
          title={'Location'}
          graph={<Bar datatype="Hometown vs Living On Campus" />}
          onTop={false}
        >
          The majority of people who lived on campus were Torontonians. Due to
          the pandemic, most of the class (about 75%) stayed home.
        </Segment>

        <Segment
          title={'Mental Health'}
          graph={<><SideBar datatype="Mental Health" /> <BoxPlot datatype="1A Average vs Mental Health" /></>}
          onTop={true}
        >People who rated their mental health greater or equal to a 5 out of
        10, had a median average greater than 85%. However, people who rated
        their mental health to be a 1-3 out of 10 also had a median average
        greater than an 85%. Note: The number of people who rated their mental
        health in that range is less than those who rated their mental health
        a higher score.</Segment>

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
          graph={<><Bar datatype="Sleep" /> <BoxPlot datatype="Sleep vs Mental Health" /></>}
          onTop={true}
        >The number of hours of sleep does not seem to have an effect on mental
        health, as seen with the median mental health scores.</Segment>

        <Segment title={'Substance Use'} graph={<Bar datatype="Drugs" />} onTop={true}></Segment>

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
          graph={<SideBar datatype="Drugs vs Coop Round" />}
          onTop={false}
        >
          The majority of people who consumed drugs, about 19%, got a job during
          the continuous round. Similarly, the majority of people who did not
          consume drugs got a job during the continuous round, that being about
          20%.
        </Segment>

        <Segment
          title={'Virginity'}
          graph={<><DoughnutChart datatype="Virginity" /> <SideBar datatype="Virginity vs Drug Use" /> </>}
          onTop={true}
        ></Segment>
      </Content>
    </>
  );
}
