import React from "react";
import Meanings from "./Meanings";
import WordPronounce from "./WordPronounce";
import WordOfTheDay from "./WordOfTheDay";
import styles from "./Results.module.css";

function Results(props) {
  if (props.results) {
    return (
      <div className={styles.resultsContainer}>
        <div className={styles.word}>
          <h2>{props.results.word}</h2>

          {props.results.phonetics.map(function (phonetic, idx) {
            return (
              <div key={idx}>
                <WordPronounce phonetics={phonetic} />
              </div>
            );
          })}
        </div>

        {props.results.meanings.map(function (meaning, idx) {
          return (
            <section key={idx}>
              <Meanings data={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else if (props.error) {
    return (
      <h3 className={styles.errormsg}>Please enter a valid english word.</h3>
    );
  } else  {
    return (
      <div>
        <WordOfTheDay />
      </div>
    );
  }
}
export default Results