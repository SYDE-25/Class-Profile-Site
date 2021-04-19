import React from 'react';
import styles from './segment.module.scss';

export default function Segment(props) {
    let doubleGraph = false;
    if (React.Children.count(props.graph.props.children) === 2) {
        doubleGraph = true;
    }

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
                {/* if doubleGraph is true (or essentially there is more than one graph, then it will conditionally render with a new div) */}
                {doubleGraph ? 
                props.graph.props.children.map((graph,i) => {
                    return(
                    <div className={styles.graphContainer} key={i}> 
                        {graph}
                    </div> 
                )})
                
                : props.graph
                }

            </div>
        </div>
    )
}