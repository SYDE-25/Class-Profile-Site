import Link from "next/link";
import styles from "./Igor.module.scss";
import Header from "../../../components/header";


export default function Igor() {
   
  return (
    <div className={styles.header}>
       <Header>
      <Link  href = "/">
      <title>SYDE '25</title>
      </Link>
        <link rel="icon" href="/favicon.ico" />
      </Header>

      <h1> Igor</h1>
    </div>

  );
}