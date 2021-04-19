import styles from './sectiontitle.module.scss';

export default function SectionTitle(props) {
    return(
    <div className={styles.container}>
        {props.children}
    </div>
    )}
