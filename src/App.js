import "./App.css";
/* import About from "./components/About";
 */
import Nav from "./components/Nav";
import React, { useState } from "react";

import Text from "./components/Text";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode enabled or not.

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* <Nav title="TextUtils" aboutText="About TextUtils" />
      {/* <Nav /> */}
      <Nav title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Text heading="Enter  text to analyze." mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
