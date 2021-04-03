import Link from "next/link";
import SiteLogo from "./siteLogo";

import styles from "./header.module.scss";
import { db } from "../firebaseConfig";

export default function Header() {
   
  return (
    <div className={styles.header}>
      <Link href = "/">
        <a>
          <SiteLogo className={styles.siteLogo} />
        </a>
        </Link>
    </div>
  );
}
