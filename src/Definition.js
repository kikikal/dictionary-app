import React from "react";
import "./Definition.css";

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
                </div>
              );
            } else {
              return (
                <div className="definitions" key={index}>
                  <h4>{meaning.partOfSpeech}</h4>
                  <p>{meaning.definition}</p>
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
