import React from "react";
import "./Photos.css"

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="row Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-4 mt-3">
              <a href={photo.src.original} rel="noreferrer" target="_blank">
                <img
                  className="img-fluid rounded"
                  alt={photo.alt}
                  key={index}
                  src={photo.src.landscape}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
