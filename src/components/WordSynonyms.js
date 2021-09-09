import React from "react";
import styles from "./Results.module.css";

const WordSynonyms = (props) => {

    if (props.synonyms) {
        return (
            <div className={styles.Synonyms}>
                <ul>
                    <li className={styles.synheader}>Synonyms:</li>
                    {props.synonyms.map(function (synonym, idx) {
                        return <li key={idx}> {synonym} </li>
                    })}
                </ul> 
            </div>
        )
    } else {
        return null;
    }
}
export default WordSynonyms
