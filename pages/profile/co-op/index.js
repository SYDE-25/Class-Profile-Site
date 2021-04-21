import Head from "next/head";
import { Content, Header } from "../../../components/layout/layout";
import DoughnutChart from "../../../components/charts/doughnut";
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
<<<<<<< HEAD
        <DoughnutChart datatype="Coop Round" />
        <StackedBar datatype = "Coop Round vs Job Sector" />
=======
>>>>>>> 7ade51fc5a6172e4832522e20446f666391175ec
      </Content>
    </>
  );
}
