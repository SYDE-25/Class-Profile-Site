import Head from 'next/head';
import PieChart from "../../../components/charts/pieChart";
import Content from '../../../components/layout/layout';

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Content>
        <h1>Demographics</h1>
        <PieChart datatype="Gender" />
        <PieChart datatype="Hometown" />
        <PieChart datatype="Parental Education" />
        <PieChart datatype="Parents Born" />
        <PieChart datatype="Parents Stem" />
        <PieChart datatype="Religion" />
        <PieChart datatype="Year Born" />
      </Content>
    </>
  );
}
