import React from "react";
import styles from "./WordSynonyms.module.css";

const WordSynonyms = (props) => {

    if (props.synonyms[0] !== "") {
        return (
            <div className={styles.wordsyn}>
                <ul>
                    <li className={styles.wordsynheader}>Synonyms:</li>
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
