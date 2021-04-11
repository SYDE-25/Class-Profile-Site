import Head from 'next/head';
import PieChart from '../../../components/charts/pieChart';
import Content from "../../../components/layout/layout";

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Content>

        <h1>Co-op</h1>
        <PieChart datatype="Coop Round" />
      </Content>

    </>
  );
}
