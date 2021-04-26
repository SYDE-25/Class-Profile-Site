import Head from "next/head";

// Layout
import NavigationCards from "../../../components/navigation/cards";
import { Content, Header } from "../../../components/layout/layout";

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
      </Content>
    </>
  );
}
