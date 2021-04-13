import Head from 'next/head';
import { Content, Header } from "../../../components/layout/layout"
import styles from '../profilePage.module.scss';

export default function Igor() {
  return (
    <>
      <Head>
        <title>Igor • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Igor</h1>
      </Content>    
    </>
  );
}
