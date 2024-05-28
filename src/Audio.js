import React from "react";
import "./Audio.css";

export default function Audio(props) {
  return (
    <span className="Audio">
      {props.audios
        .map(function (audio, index) {
          return (
            <span key={index}>
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
        })}
    </span>
  );
}
