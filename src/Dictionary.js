import React from "react";

export default function Dictionary() {
  let searchValue = null;

  function changeSearchValue(event) {
    searchValue = event.target.value;
    console.log(searchValue);
  }

  function searchSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${searchValue}...`);
  }

  return (
    <form onSubmit={searchSubmit}>
      <input
        type="search"
        placeholder="Enter a word..."
        autoFocus
        onChange={changeSearchValue}
      />
      <input type="submit" value="Search" />
    </form>
  );
}
