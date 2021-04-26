import Head from 'next/head';
import { Content, Header } from '../../../components/layout/layout';
import styles from '../profilePage.module.scss';

export default function Lifestyle() {
  return (
    <>
      <Head>
        <title>Lifestyle • Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Lifestyle</h1>
      </Content>
    </>
  );
}
