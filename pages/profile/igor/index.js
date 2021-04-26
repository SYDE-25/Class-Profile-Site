import Head from 'next/head';

// Layout
import { Content, Header } from "../../../components/layout/layout"
import NavigationCards from "../../../components/navigation/cards";

export default function Igor() {
  return (
    <>
      <Head>
        <title>Igor • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={"1A Class Profile"}/>

      <Content>
        <h1>Igor</h1>
      </Content>    
    </>
  );
}
