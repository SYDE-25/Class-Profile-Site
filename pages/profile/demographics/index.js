import Head from 'next/head';
import dynamic from 'next/dynamic';
import styles from '../profile.module.scss';

// Layout
import { Content, Header } from '../../../components/layout/layout';
import NavigationCards, { Card } from "../../../components/navigation/cards";
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
        <h4>
        Who are the individuals that make up SYDE? Where are they from? What are their ethnicities, beliefs, and hometowns?
        </h4>
        
        <Segment title="Gender and Sexuality" 
        graph={
           <>
            <DoughnutChart datatype="Gender" /> 
            <BarGraph datatype="Sexuality"/> 
            </>} 
          onTop={true}
            >
          There is about an equal representation of both females and males in
          SYDE 2025, with slightly more males than females. This contrasts to
          the SYDE 2024 Cohort, which had a greater amount of females than males.
        </Segment>



        <Segment
          title="Ethnicities and Religon"
          graph={
          <>
          <BarGraph datatype="Ethnicities" width = {500} height ={500} />
          <BarGraph datatype="Religion" width = {450} height ={500}/>
          </>}
          onTop={true}
        >
          The majority of the SYDE 2025 cohort is Asian or Caucasian, similar
          to past class profiles.
        </Segment>

        <Segment
          title="Hometown and Birth Years"
          graph={
            <>
            <BarGraph datatype="Hometown" width={600} height ={500}/>
            <DoughnutChart datatype="Year Born" />
            </>}
          onTop={true}
        ></Segment>

        <Segment
          title="Political Alignment"
          graph={<BarGraph datatype="Political Alignment"  width={800} height ={500}/>}
          onTop={true}
        ></Segment>

        <Segment
          title="Parents"
          graph={
          <>
          <DoughnutChart datatype="Parents Born" />
          <DoughnutChart datatype="Parents Stem" />
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
                      Academics
                      </>
                }
                link={"/profile/academics#content"}
                svg={"/cards/academics.svg"}
                relativeSize={1}
                bottomSect={true}
            />
          </div>
        </div>
      </Content>
    </>
  );
}
