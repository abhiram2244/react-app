import React, { useState } from "react";

export default function Text(props) {
  const handleUpclick = () => {
    console.log("button clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase", "success");
  };
  const handleLowclick = () => {
    console.log("button clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text", "success");
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }
          {/* {text.length > 0 ? text.split(" ").length : 0}  */}words and{" "}
          {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
