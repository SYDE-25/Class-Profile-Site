import Header from "../header/header"
import styles from "./layout.module.scss"

export default function Layout(props) {
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