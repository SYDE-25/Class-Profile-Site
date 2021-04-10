import Head from "next/head";
import { Content, Header } from "../../../components/layout/layout";

import Gender from "../../../components/charts/gender";
import Hometown from "../../../components/charts/hometown";
import Education from "../../../components/charts/parentEducation";
import ParentBirth from "../../../components/charts/parentBorn";
import ParentStem from "../../../components/charts/parentStem";
import Religion from "../../../components/charts/religion";
import Sexuality from "../../../components/charts/sexuality";
import YearBorn from "../../../components/charts/yearBorn";

export default function Demographics() {
  return (
    <>
      <Head>
        <title>Demographics • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Demographics</h1>
      </Content>
    </>
  );
}
