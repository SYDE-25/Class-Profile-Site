import Head from 'next/head';
import Contentlayout from '../../../components/contentlayout/contentlayout';

import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

export default function Igor() {
  return (
    <>
      <Head>
        <title>Igor • Class Profile</title>
      </Head>

      <Contentlayout>
        <h1>Igor</h1>
      </Contentlayout>    
    </>
  );
}
