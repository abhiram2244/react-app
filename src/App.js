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
    } else {
      setMode("light");
    }
  };
  return (
    <>
      {/* <Nav title="TextUtils" aboutText="About TextUtils" />
      {/* <Nav /> */}
      <Nav title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Text heading="Enter  text to analyze." />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
