import Link from 'next/link';
import SiteLogo from '../siteLogo';
import styles from './layout.module.scss';

export function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <SiteLogo className={styles.siteLogo} />
      </Link>

      <div className={styles.divLinks}>
        <Link href="/profile">
          <a className={styles.navLink}>profile</a>
        </Link>

        <Link href="thelinkwasannoying">
          <a className={styles.navLink}>about</a>
        </Link>
      </div>
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
