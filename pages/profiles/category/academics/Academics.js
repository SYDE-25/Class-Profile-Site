import Link from "next/link";
import styles from "./Academics.module.scss";
import Header from "../../../../components/header";


export default function Academics() {
   
  return (
    <div className={styles.header}>
       <Header>
      <Link  href = "/">
      <title>SYDE '25</title>
      </Link>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <h1> Academics</h1>

      <Link href = "../../Profile">
      <h2> Profile</h2>
      </Link>
    </div>

  );
}