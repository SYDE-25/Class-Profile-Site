import Head from "next/head";
import { Content, Header } from "../../../components/layout/layout";
import StackedBar from "../../../components/charts/stackedbar";

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Header />
      <Content>
        <h1>Co-op</h1>
        <StackedBar datatype = "Coop Round vs Job Sector" />
      </Content>
    </>
  );
}
