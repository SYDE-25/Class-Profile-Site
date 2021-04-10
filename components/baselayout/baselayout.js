import Header from "../header/header"
import styles from "./baselayout.module.scss"

export default function Baselayout(props) {
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