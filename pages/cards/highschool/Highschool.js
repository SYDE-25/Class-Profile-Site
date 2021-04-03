import Link from "next/link";
import styles from "./Highschool.module.scss";
import Header from "../../../components/header";


export default function Highschool() {
   
  return (
    <div className={styles.header}>
       <Header>
      <Link  href = "/">
      <title>SYDE '25</title>
      </Link>
        <link rel="icon" href="/favicon.ico" />
      </Header>

      <h1> Highschool</h1>
    </div>

  );
}