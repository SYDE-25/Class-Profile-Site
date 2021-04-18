import Head from "next/head";
import { Content, Header } from "../../../components/layout/layout";
import DoughnutChart from "../../../components/charts/doughnut";
import Segment from "../../../components/layout/segment/segment"
import { text } from "../../../text1A";

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Demographics</h1>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          
        <br/>  
        <br/>  
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </h4>

        <Segment title="Gender" graph={<DoughnutChart datatype="Gender" />}>
        "At vero eos et accusamus et iusto odio dignissimos ducimus q
        </Segment>
        <Segment title="Hometown" graph={<DoughnutChart datatype="Hometown" />}>
          
        </Segment>
        
        <Segment title="Parents" graph={<DoughnutChart datatype="Parents Born" />}>
          
        </Segment>
        <Segment graph={<DoughnutChart datatype="Parental Education" />}>
          
        </Segment>
        <Segment  graph={<DoughnutChart datatype="Parents Stem" />}>
          
        </Segment>
        <Segment title="Religion" graph={<DoughnutChart datatype="Religion" />}>
          
        </Segment>
        <Segment title="Year Born" graph={<DoughnutChart datatype="Year Born" />}>
          
        </Segment>
      </Content>
    </>
  );
}
