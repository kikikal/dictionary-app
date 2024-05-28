import React from "react";
import "./Audio.css";

export default function Audio(props) {
  return (
    <span className="Audio">
      {props.phoneticsAudios.map(function (audio, index) {
        if (audio.audio) {
          return (
            <span key={index}>
              <em>{audio.text}</em>
              <a
                href={audio.audio}
                className="material-symbols-outlined"
                target="_blank"
                rel="noreferrer"
              >
                volume_up
              </a>
            </span>
          );
        } else {
          return (
            <span key={index}>
              <em>{audio.text}</em>
            </span>
          );
        }
      })}
    </span>
  );
}
