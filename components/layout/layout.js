import Link from 'next/link';

import SiteLogo from '../siteLogo';
import styles from './layout.module.scss';

export function Header() {
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

export function Content(props) {
  return (
    <div className={styles.container}>
      <div className={styles.margin}>{props.children}</div>
    </div>
  );
}
