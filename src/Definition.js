import React from "react";
import "./Definition.css";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Definition(props) {
  if (props.response) {
    return (
      <div className="Definition">
        <h2>{props.response.word}</h2>
        <h3>
          {" "}
          <em>{props.response.phonetic}</em>
        </h3>
        <br />
        <div>
          {props.response.meanings.map(function (meaning, index) {
            if (meaning.example) {
              return (
                <div className="definitions" key={index}>
                  <h4>{meaning.partOfSpeech}</h4>
                  <p>{meaning.definition}</p>
                  <p className="example">
                    ex. <em>{meaning.example}</em>
                  </p>{" "}
                  <Synonyms synonyms={meaning.synonyms} />
                  <Antonyms antonyms={meaning.antonyms} />
                </div>
              );
            } else {
              return (
                <div className="definitions" key={index}>
                  <h4>{meaning.partOfSpeech}</h4>
                  <p>{meaning.definition}</p>
                  <Synonyms synonyms={meaning.synonyms} />
                  <Antonyms antonyms={meaning.antonyms} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
