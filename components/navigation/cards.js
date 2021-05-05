import Link from "next/link";
import styles from "./cards.module.scss";
import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
export default function NavigationCards(props) {
  const [url, seturl] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    if (id <= 0) {
      db.collection("1A Data")
        .doc("Data Sci Report Link")
        .onSnapshot(
          async (snapshot) => {
            let data = {
              url: "",
            };
            data.url = await snapshot.data().url;
            console.log(data.url);
            setId(id + 1);
            seturl(data.url);
            console.log(url);
          },
          (err) => {
            console.log("Error fetching firebase snapshot! " + err);
          }
        );
    }
  });
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
        <a href={url} target='_blank'>
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
