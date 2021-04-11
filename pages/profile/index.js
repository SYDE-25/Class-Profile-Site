import Head from 'next/head';
import Link from 'next/link';
import { Content, Header } from '../../components/layout/layout';
import styles from "./profilePage.module.scss"

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Class Profile</title>
      </Head>

      <Header />

      <Content>
        <h1>Profile</h1>
        <div className={styles.links}>
          <Link href="profile/demographics">Demographics</Link>
          <Link href="profile/high-school">High School</Link>
          <Link href="profile/co-op">Co-op</Link>
          <Link href="profile/lifestyle">Lifestyle</Link>
          <Link href="profile/academics">Academics</Link>
          <Link href="profile/igor">Igor</Link>
        </div>
      </Content>
    </div>
  );
}
