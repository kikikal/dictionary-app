import React, { useState } from "react";
import Definition from "./Definition";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchResponse, setSearchResponse] = useState();
  const [searchValue, setSearchValue] = useState(null);
  const [audio, setAudio] = useState(null);

  function getAudio(response) {
    console.log(response.data[0].phonetics);
    setAudio(response.data[0].phonetics);
  }

  function searchForWord(response) {
    setSearchResponse(response.data);
    console.log(response);
    let audioUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${response.data.word}`;
    axios.get(audioUrl).then(getAudio);
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
    </div>
  );
}
