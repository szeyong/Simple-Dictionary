import React from "react";
import WordSynonyms from "./WordSynonyms";
import WordExamples from "./WordExamples";
import styles from "./Results.module.css";

function Meanings(props) {
  if (props.data.definitions.length > 1) {
    return (
      <div className={styles.Definitions}>
        <h3>{props.data.partOfSpeech}</h3>
        {props.data.definitions.map(function (definitions, idx) {
          return (
            <div className={styles.meaning} key={idx}>
              <div className={styles.description}>
                {idx + 1}. {definitions.definition}
              </div>
              <WordExamples examples={definitions.example} />
              <WordSynonyms synonyms={definitions.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className={styles.Definitions}>
        <h3>{props.data.partOfSpeech}</h3>
        {props.data.definitions.map(function (definitions, idx) {
          return (
            <div className={styles.meaning} key={idx}>
              <div className={styles.description}>{definitions.definition}</div>
              <WordExamples examples={definitions.example} />
              <WordSynonyms synonyms={definitions.synonyms} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default Meanings