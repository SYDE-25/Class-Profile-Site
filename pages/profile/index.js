import Head from 'next/head';

import { Header } from '../../components/layout/layout';
import NavigationCards from '../../components/navigation/cards.js';

export default function Profile() {
  return (
    <div>
      <Head>
        <title>Class Profile</title>
      </Head>

      <Header />

      <NavigationCards title={'1A Class Profile'} />
    </div>
  );
}
