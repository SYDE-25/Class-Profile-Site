import Link from 'next/link';
import SiteLogo from '../siteLogo';
import styles from './layout.module.scss';
import { useState, useEffect } from 'react'

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

        <Link href="/about">
          <a className={styles.navLink}>about</a>
        </Link>
      </div>
    </div>
  );
}

export function Content(props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  })

  const toggleVisible = () => {
    let visibility = false;
    if (document.documentElement.scrollTop == undefined || document.documentElement.scrollTop < 300) visibility = false;
    else visibility = true;

    setVisible(visibility)
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  console.log(visible)

  return (
    <div className={styles.container}>
      <div className={styles.margin}>{props.children}</div>
      { visible ?
        <button className={styles.button} onClick={goToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" width="100%">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg></button>
        :
        ""
      }

    </div>
  );
}
