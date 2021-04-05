import Link from 'next/link';
import SiteLogo from '../siteLogo';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <SiteLogo className={styles.siteLogo} />
        </a>
      </Link>

      <Link href="/profile">
          <a className={styles.navLink}>Profile</a>
      </Link>
    </div>
  );
}
