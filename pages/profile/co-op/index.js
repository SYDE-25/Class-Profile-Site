import Head from 'next/head';
import PieChart from '../../../components/charts/pieChart';
import Contentlayout from "../../../components/contentlayout/contentlayout";

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Contentlayout>
        <h1>Co-op</h1>
        <PieChart datatype="Coop Round" />
      </Contentlayout>
    </>
  );
}
