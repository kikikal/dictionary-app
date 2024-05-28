import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.antonyms) {
    return (
      <div className="Antonyms">
        {" "}
        Antonyms:
        {props.antonyms.map(function (antonym, index) {
          return (
            <span key={index} className="antonym">
              {antonym}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
} 