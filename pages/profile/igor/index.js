import Head from 'next/head';
import styles from '../profile.module.scss';

// Layout
import { Content, Header } from '../../../components/layout/layout';
import NavigationCards from '../../../components/navigation/cards';

export default function Igor() {
  return (
    <>
      <Head>
        <title>Igor • Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={'1A Class Profile'} />

      <Content className={styles.igor}>
        <h1>Igor</h1>
        <div className={styles.igorFlexHorizontal}>
          <div className={styles.igorFlexVertical}>
            <p>
            Dr. Igor Ivkovic was a Systems Design Engineering professor who taught us during our 1A term. 
            <br></br>
            <br></br>
            Affectionately known as Igor by his students, he was known for being incredibly sympathetic and kind. 
            His passion was teaching, and he dedicated his life to his family and students. 
            <br></br>
            <br></br>

            His office hours were never ending, with him always being available to answer questions, or just talk. 
            <br></br>
            <br></br>

            On the 27th of November 2020, Dr. Igor Ivkovic tragically passed away at the age of 43. 
            Igor was a kind soul with a heart of gold who changed the lives of everyone he touched, and he will be dearly missed.
            <br></br>
            <br></br>

            </p>
            <h5>
              Kindness is an ember that glows deep inside us
              <br></br>
              It gives us warmth when the world around us may be cold
              <br></br>
              It gives us energy to share the warmth to those in need
              <br></br>
              The ember will glow as long as our spirit is alive
              <br></br>
              <br></br>
              - Igor Ivkovic
            </h5>
          </div>
          <div className={styles.igorFlexVertical}></div>
          <img src="https://waterloo-sec.imodules.com/s/1802/images/gid2/editor/online_giving/custom_donation_pages/igorivkovic.jpg" alt="Igor Ivkovic" className={styles.igorPicture}></img>
        </div>
      </Content>
    </>
  );
}
