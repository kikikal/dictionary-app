import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <span>
        e.g. <em>{props.example}</em>
      </span>
    );
  } else {
    return null;
  }
}
