import React, { useState } from "react";
import Definition from "./Definition";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [searchResponse, setSearchResponse] = useState();
  const [searchValue, setSearchValue] = useState(null);

  function searchForWord(response) {
    setSearchResponse(response.data);
    console.log(response.data);
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
      <Definition response={searchResponse} />
    </div>
  );
}
