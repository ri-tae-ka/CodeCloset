import React, { Fragment, useState } from "react";
import "./Design.css";

const LearnCSS = () => {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function share() {
    const CSS = inputValue;
  }

  const CSS = inputValue;

  return (
    <Fragment>
      <form>
        <main>
          <section>
            <h2>Input</h2>
            <textarea
              id="input"
              value={inputValue}
              onChange={handleInputChange}
            />
          </section>
          <section>
            <h2>Preview</h2>
            <div id="output" dangerouslySetInnerHTML={{ __html: inputValue }} />
          </section>
        </main>
      </form>
      <footer>
        <p style={{ color: "black" }}>&copy; 2023 Code Closet</p>
      </footer>
    </Fragment>
  );
};

export default LearnCSS;
