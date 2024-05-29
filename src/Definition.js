import React from "react";
import "./Definition.css";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Audio from "./Audio";
import Photos from "./Photos";

export default function Definition(props) {
  if (props.response && props.phoneticsAudios) {
    if (props.response.word) {
      return (
        <div className="Definition">
          <h2>{props.response.word}</h2>
          <h3>
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
          <Photos photos={props.photos} />
        </div>
      );
    } else {
      return (
        <div className="text-danger text-center fs-4">
          Please input a valid word
        </div>
      );
    }
  } else {
    return null;
  }
}
