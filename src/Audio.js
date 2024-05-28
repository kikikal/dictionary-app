import React from "react";
import "./Audio.css";

export default function Audio(props) {
  if (props.audioLink) {
    return (
      <span className="Audio">
        <a
          href={props.audioLink}
          className="material-symbols-outlined"
          target="_blank"
          rel="noreferrer"
        >
          volume_up
        </a>
      </span>
    );
  } else {
    return null;
  }
}
