import { Header, Content } from "../../components/layout/layout";
import Head from "next/head";
import styles from "./about.module.scss";

export default function About() {
    return(
        <>
            <Head>
                <title>About • Class Profile</title>
            </Head>

            <Header/>
        </>
    )
}