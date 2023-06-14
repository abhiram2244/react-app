import "./App.css";
/* import About from "./components/About";
 */
import Nav from "./components/Nav";
import React, { useState } from "react";

import Text from "./components/Text";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode enabled or not.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Nav title="TextUtils" aboutText="About TextUtils" />
      {/* <Nav /> */}
      <Nav title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Text
          showAlert={showAlert}
          heading="Enter  text to analyze."
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
