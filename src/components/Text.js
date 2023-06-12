import React, { useState } from "react";

export default function Text(props) {
  const handleUpclick = () => {
    console.log("button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowclick = () => {
    console.log("button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
