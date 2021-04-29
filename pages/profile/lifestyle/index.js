import Head from "next/head";

// Layout
import NavigationCards from "../../../components/navigation/cards";
import { Content, Header } from "../../../components/layout/layout";
import Segment from "../../../components/layout/segment/segment";
import SideBar from "../../../components/charts/sidebysidebars";

export default function Lifestyle() {
  return (
    <>
      <Head>
        <title>Lifestyle • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={"1A Class Profile"}/>

      <Content>
        <h1>Lifestyle</h1>
        <Segment
          graph={<SideBar datatype="Mental Health" />}
          onTop={false}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Segment>
      </Content>
    </>
  );
}
