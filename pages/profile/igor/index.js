import Head from 'next/head';
import Content from '../../../components/layout/layout';

import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

export default function Igor() {
  return (
    <>
      <Head>
        <title>Igor • Class Profile</title>
      </Head>

      <Content>
        <h1>Igor</h1>
      </Content>    
    </>
  );
}
