import React from "react";
import Meanings from "./Meanings";
import WordPronounce from "./WordPronounce";

function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="word">
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
  } else {
    return null;
  }
}
export default Results