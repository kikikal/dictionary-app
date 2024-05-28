import React from "react";
import "./Definition.css";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Audio from "./Audio";

export default function Definition(props) {
  if (props.response && props.phoneticsAudios) {
    return (
      <div className="Definition">
        <h2>{props.response.word}</h2>
        <h3>
          <em>{props.response.phonetic}</em>
          <Audio phoneticsAudios={props.phoneticsAudios} />
        </h3>
        <br />
        <div>
          {props.response.meanings.map(function (meaning, index) {
            return (
              <div className="definitions" key={index}>
                <h4>{meaning.partOfSpeech}</h4>
                <p>{meaning.definition}</p>
                <p className="example">
                  <Example example={meaning.example} />
                </p>{" "}
                <Synonyms synonyms={meaning.synonyms} />
                <br />
                <Antonyms antonyms={meaning.antonyms} />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
