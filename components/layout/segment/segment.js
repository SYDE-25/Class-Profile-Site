import styles from './segment.module.scss';

export default function Segment(props) {
    let segmentStyle = {}
    if (props.onTop) {
        segmentStyle = {
            container: styles.containerOnTop,
            description: styles.descriptionOnTop,
            graph: styles.graphOnTop,
        }
    } else {
        segmentStyle = {
            container: styles.container,
            description: styles.description,
            graph: styles.graph,
        }
    }
    return (
        <div className={segmentStyle.container}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={segmentStyle.description}>
                    {props.children}
                </div>
            </div>
            <div className={segmentStyle.graph}>
                {props.graph}
            </div>
        </div>
    )
}