import Link from "next/link";
import styles from "./Lifestyle.module.scss";
import Header from "../../../components/header";


export default function Lifestyle() {
   
  return (
    <div className={styles.header}>
      <Header>
      <Link  href = "/">
      <title>SYDE '25</title>
      </Link>
        <link rel="icon" href="/favicon.ico" />
      </Header>

    
      <h1> Lifestyle</h1>
    </div>

  );
}