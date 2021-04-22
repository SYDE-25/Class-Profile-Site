import styles from './sectiontitle.module.scss';

export default function SectionTitle(props) {
    return(
    <div className={styles.container}>
        <p>
            {props.children}
        </p>
    </div>
    )}
