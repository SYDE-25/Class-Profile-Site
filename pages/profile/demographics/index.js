import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../profile.module.scss';

// Layout
import { Content, Header } from '../../../components/layout/layout';
import NavigationCards from '../../../components/navigation/cards';
import Segment from '../../../components/layout/segment/segment';

// Graphs
const BarGraph = dynamic(() => import('../../../components/charts/barGraph'));
const DoughnutChart = dynamic(() =>
  import('../../../components/charts/doughnutChart')
);

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={'1A Class Profile'} />

      <Content className={styles.demographics}>
        <h1>Demographics</h1>

        <Segment title="Gender" graph={<DoughnutChart datatype="Gender" />}>
          There is about an equal representation of both females and males in
          SYDE 2025, with slightly more males than females. This contrasts to
          the SYDE 2024 Cohort, which had a greater amount of females than males
          [1].
        </Segment>

        <Segment
          title="Ethnicities"
          graph={<BarGraph datatype="Ethnicities" />}
        >
          The majority of the SYDE 2025 cohort is Asian or Cauccasian, similar
          to past class profiles [1][2].
        </Segment>

        <Segment
          title="Sexuality"
          graph={<BarGraph datatype="Sexuality" />}
          onTop={false}
        ></Segment>

        <Segment
          title="Birth Years"
          graph={<DoughnutChart datatype="Year Born" />}
        ></Segment>

        <Segment
          title="Religion"
          graph={<BarGraph datatype="Religion" />}
        ></Segment>

        <Segment
          title="Political Alignment"
          graph={<BarGraph datatype="Political Alignment" />}
        ></Segment>
        <Segment
          title="Parents"
          graph={<DoughnutChart datatype="Parents Born" />}
        ></Segment>
        <Segment
          graph={<DoughnutChart datatype="Parents Stem" />}
          onTop={true}
        ></Segment>

        <Segment
          title="Hometown"
          graph={<BarGraph datatype="Hometown" />}
        ></Segment>
      </Content>
    </>
  );
}
