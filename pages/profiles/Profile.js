import Link from "next/link";
import styles from "../../styles/Home.module.scss";
import Header from "../../components/header";

export default function Profile() {
  return (
    <div>
      <Header>
        <Link href="/">
          <title>SYDE '25</title>
        </Link>
        <link rel="icon" href="/favicon.ico" />
      </Header>

      <h1> Profile</h1>

      <div className = {styles.content}>
        <h1>More Content Here</h1>

        <div>
          <Link href="./category/demographics/Demographics">Demographics</Link>
        </div>

        <div>
          <Link href= "./category/highschool/Highschool">Highschool</Link>
        </div>

        <div>
          <Link href= "./category/coop/Coop">Coop</Link>
        </div>

        <div>
          <Link href= "./category/lifestyle/Lifestyle">Lifestyle</Link>
        </div>

        <div>
          <Link href= "./category/academics/Academics">Academics</Link>
        </div>

        <div>
          <Link href= "./category/igor/Igor">Igor</Link>
        </div>
      </div>
    </div>
  );
}
/*

   
    */
