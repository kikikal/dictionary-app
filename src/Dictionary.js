import React, { useState } from "react";
import Definition from "./Definition";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchResponse, setSearchResponse] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [audio, setAudio] = useState(null);
  const [photos, setPhotos] = useState(null);

  function getAudio(response) {
    setAudio(response.data[0].phonetics);
  }

  function getPhotos(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function searchForWord(response) {
    setSearchResponse(response.data);
    let audioUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${response.data.word}`;
    axios.get(audioUrl).then(getAudio);
    let photosKey = `LRMakbG7yTpzizJVeu0BienN4BHsoS81fB4EzkWo4F2YCsd6bH8Ip69r`;
    let photosUrl = `https://api.pexels.com/v1/search?query=${response.data.word}&per_page=9`;
    axios
      .get(photosUrl, { headers: { Authorization: `${photosKey}` } })
      .then(getPhotos);
  }

  function changeSearchValue(event) {
    setSearchValue(event.target.value);
  }

  function searchSubmit(event) {
    event.preventDefault();
    let apiKey = `d37e0bate3co638094f17bb45fdb3101`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchValue}&key=${apiKey}`;

    axios.get(apiUrl).then(searchForWord);
    return `Searching for ${searchValue}...`;
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchSubmit}>
        <input
          type="search"
          placeholder="Enter a word..."
          autoFocus
          onChange={changeSearchValue}
        />
      </form>
      <Definition response={searchResponse} phoneticsAudios={audio} />
      <Photos photos={photos} />
    </div>
  );
}
