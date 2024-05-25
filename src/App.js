import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/kikikal" target="_blank" rel="noreferrer">
          Christina Kalyvas
        </a>
        , is open sourced on{" "}
        <a
          target="_blank"
          href="https://github.com/kikikal/dictionary-app"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dictionary-app-ck.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
