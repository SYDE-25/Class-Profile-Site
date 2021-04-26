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

  return (
    <div className={styles.container}>
      {props.children}
      { visible &&
        <button className={styles.button} onClick={goToTop}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 29" fill="#222" width="80%">
            <path
              fillRule="evenodd"
              d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z"
              clipRule="evenodd"
            />
          </svg></button>
      }
    </div>
  );
}
