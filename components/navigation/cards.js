import Link from "next/link";
import styles from "./cards.module.scss";

const NavigationCards = (props) => {
  return (
    <div className={styles.cardsContainer}>
      {props.title != undefined && <h1>{props.title}</h1>}
      <div className={styles.row}>
        <Card
          title={"Demographics"}
          link={"/profile/demographics"}
          svg={"/cards/demographics.svg"}
          relativeSize={2}
        />
        <Card
          title={"Academics"}
          link={"/profile/academics"}
          svg={"/cards/academics.svg"}
          relativeWidth={3}
        />
      </div>
      <div className={styles.row}>
        <Card
          title={"Co-op"}
          link={"/profile/co-op"}
          svg={"/cards/co-op.svg"}
          relativeSize={2}
        />
        <Card
          title={"Lifestyle"}
          link={"/profile/lifestyle"}
          svg={"/cards/lifestyle.svg"}
          relativeSize={3}
        />
        <Card
          title={"Igor"}
          link={"/profile/igor"}
          svg={"/cards/igor.svg"}
          relativeSize={2}
        />
      </div>
      <div className={styles.report}>
        <a href='https://eevanwong.github.io/SYDE2025-datasci-report/reports/data_sci_report.pdf' target='_blank'>
          <h4>
            Check out the full data science report here <span>{'>'}</span>
          </h4>
        </a>
      </div>
    </div>
  );
};



const Card = (props) => {
  return (
    <Link href={props.link}>
      <div
        className={styles.card}
        style={{
          backgroundImage: `url(${props.svg})`,
          flexGrow: props.relativeSize,
        }}
      >
        <h3>{props.title}</h3>
      </div>
    </Link>
  );
};
export default NavigationCards;
