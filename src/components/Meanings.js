import React from "react";
import WordSynonyms from "./WordSynonyms";
import WordExamples from "./WordExamples";

function Meanings(props) {
  if (props.data.definitions.length > 1) {
    return (
      <div className="Meanings-container">
        <h3>{props.data.partOfSpeech}</h3>
        {props.data.definitions.map(function (definitions, idx) {
          return (
            <div className="meaning" key={idx}>
              <div className="description">
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
      <div className="Meanings-container">
        <h3>{props.data.partOfSpeech}</h3>
        {props.data.definitions.map(function (definitions, idx) {
          return (
            <div className="meaning" key={idx}>
              <div className="description">{definitions.definition}</div>
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