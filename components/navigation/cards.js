import Link from "next/link";
import styles from "./cards.module.scss";

export default function NavigationCards(props) {
  return (
    <div className={styles.cardsContainer}>
      {props.title != undefined && <h1>{props.title}</h1>}
      <div className={styles.row}>
        <Card
          title={"Demographics"}
          link={"/profile/demographics#content"}
          svg={"/cards/demographics.svg"}
          relativeSize={2}
        />
        <Card
          title={"Academics"}
          link={"/profile/academics#content"}
          svg={"/cards/academics.svg"}
          relativeWidth={3}
        />
      </div>
      <div className={styles.row}>
        <Card
          title={"Co-op"}
          link={"/profile/co-op#content"}
          svg={"/cards/co-op.svg"}
          relativeSize={2}
        />
        <Card
          title={"Lifestyle"}
          link={"/profile/lifestyle#content"}
          svg={"/cards/lifestyle.svg"}
          relativeSize={3}
        />
        <Card
          title={"Igor"}
          link={"/profile/igor#content"}
          svg={"/cards/igor.svg"}
          relativeSize={2}
        />
      </div>
      <div className={styles.report}>
        <a href="/1a/data_sci_report.pdf" target="_blank">
          <h4>
            Data Science report here (Includes References) <span>{">"}</span>
          </h4>
        </a>
      </div>
    </div>
  );
}

export const Card = (props) => {
  let cardStyles = {};
  if (props.bottomSect) {
    cardStyles = {
      card: styles.cardBottom,
    };
  } else {
    cardStyles = {
      card: styles.card,
    };
  }

  return (
    <Link href={props.link}>
      <div
        className={cardStyles.card}
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
