import React from 'react';
import styles from "./Results.module.css";

const WordExamples = (props) => {
    if (props.examples) {
        return (
            <div className={styles.wordexamples}>
                <div className={styles.example}>
                    "{props.examples}"
                </div>
            </div>
        )
    } else {
        return null;
    }
}
export default WordExamples
