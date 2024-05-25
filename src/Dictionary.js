import React, { useState } from "react";
import Definition from "./Definition";
import axios from "axios";

export default function Dictionary() {
  const [searchResponse, setSearchResponse] = useState(null);
  let searchValue = null;

  function searchForWord(response) {
    console.log(response);
    setSearchResponse({
      word: response.data.word,
      phonetic: response.data.phonetic,
      definition: response.data.meanings[0].definition,
      type: response.data.meanings[0].partOfSpeech,
      example: response.data.meanings[0].example,
      synonyms: response.data.meanings[0].synonyms,
    });
  }

  function changeSearchValue(event) {
    searchValue = event.target.value;
  }

  function searchSubmit(event) {
    event.preventDefault();
    let apiKey = `d37e0bate3co638094f17bb45fdb3101`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchValue}&key=${apiKey}`;
    axios.get(apiUrl).then(searchForWord);
    return `Searching for ${searchValue}...`;
  }

  return (
    <div>
      <form onSubmit={searchSubmit}>
        <input
          type="search"
          placeholder="Enter a word..."
          autoFocus
          onChange={changeSearchValue}
        />
        <input type="submit" value="Search" />
      </form>
      <Definition word={searchValue} />
    </div>
  );
}
