import Link from "next/link";
import SiteLogo from "./siteLogo";

import styles from "./header.module.scss";
import { db } from "../firebaseConfig";

export default function Header() {
    /*
    ***BASIC WAY TO GET DATA FROM FIRESTORE TEMPLETE***
    
  const backup = db.collection("1A Data").doc("Backup");

  async function anything() {
    const doc = await backup.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
    }
  }
  anything();

  */
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
