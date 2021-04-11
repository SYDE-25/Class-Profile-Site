import Link from 'next/link';
import SiteLogo from '../siteLogo';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
          <SiteLogo className={styles.siteLogo} />
      </Link>
      
      <div className={styles.divLinks}>
        <Link href="/profile">
            <a className={styles.navLink}>profile</a>
        </Link>

        <Link href="https://www.youtube.com/watch?v=S0yLbdZRu3A&ab_channel=ElCroissant">
            <a className={styles.navLink}>about</a>
        </Link>
      </div>
    </div>
  );
}
