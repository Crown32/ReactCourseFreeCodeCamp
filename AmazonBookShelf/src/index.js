import React from "react";
import reactDom from "react-dom";

function App() {
  return (
    <section>
      <h1>This is a BookShelf</h1>
      <Book />
    </section>
  );
}

function Book() {
  return <article>This is a Book</article>;
}

reactDom.render(<App />, document.getElementById("root"));
