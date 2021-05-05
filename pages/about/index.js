import { Header, Content } from "../../components/layout/layout";
import Head from "next/head";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <Head>
        <title>About • Class Profile</title>
      </Head>
      <Header />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2>About Systems Design Engineering </h2>
        Systems Design Engineering is a unique interdisciplinary engineering
        program at the University of Waterloo that explores problem solving
        through a systems-thinking methodology. Our class, the class of 2025,
        has had a first term experience unlike any other as all of our courses
        were taught online due to the pandemic. We hope that this class profile
        will reflect some of the different perspectives that our class may hold,
        and that you as the user will take something away from exploring the
        site.
        <br/>
        <br/>
        <h2>Preface</h2>
        The objective of this website was to better understand the histories of
        the students in the systems design engineering (SYDE) class of 2025, as
        well as understanding the personalities of the students. This was also
        an opportunity to display and test our skills in design, data science,
        frontend development, and team collaboration. X students in our first year class
        responded to this survey, which includes over X questions. The data from
        each question is displayed throughout the website.
        <br/>
        <br/>
        <h2>Credits</h2>
        Names are listed alphabetically and not in order of who contributed the
        most.
      </div>

        <div className={styles.row}>
          <div className={styles.column}>
            <h3 className={styles.pm}>PM </h3>
            <p> Joseph Lamonica</p>
            <p>Sean Ashley</p>
            <p> Shivam Sharma </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.dataSci}>Data Sci </h3>
            <p>Alan Zhang </p>
            <p> Nicolas Palmar </p>
            <p>Nirmal Hegde </p>
            <p> Sean Ashley </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.design}>Design </h3>
            <p> Ebrahim Yaakoub Agha </p>
            <p> Evan Wong </p>
            <p> Joseph Lamonica </p>
            <p> Shivam Sharma </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.webDev}>Web Dev </h3>
            <p> Ebrahim Yaakoub Agha </p>
            <p>Evan Wong </p>
            <p> Hannah Hepburn </p>
            <p> Parmin Patel </p>
            <p> Shivam Sharma </p>
          </div>
        </div>
      </div>
    </>
  );
}
