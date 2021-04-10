import Header from "../header/header"
import styles from "./contentlayout.module.scss"

export default function Contentlayout(props) {
    return(
        <>
        <Header />
        <div className={styles.container}>
            <div className={styles.margin}>
                {props.children}
            </div>
        </div>
    </>
    )
}