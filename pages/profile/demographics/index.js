import Head from 'next/head';
import { Content, Header } from "../../../components/layout/layout"

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
