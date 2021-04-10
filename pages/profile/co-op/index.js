import Head from "next/head";
import { Content, Header } from "../../../components/layout/layout";

import PieChart from "../../../components/charts/pieChart";

export default function Coop() {
  return (
    <>
      <Head>
        <title>Co-op • Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>Co-op</h1>
        <PieChart datatype="Coop Round" />
      </div>
    </>
  );
}
