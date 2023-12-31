import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import React, { useState } from "react";
import Text from "./components/Text";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode enabled or not.
  const [alert, setAlert] = useState(null);
  /*  const [newmode, setnewMode] = useState("light"); */

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
  /* const newtoggleMode = () => {
    if (mode === "light") {
      setnewMode("green");
      document.body.style.backgroundColor = "green";
      showAlert("green mode has been enabled", "success");
    } else {
      setnewMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }; */
  return (
    <>
      {/* <Nav title="TextUtils" aboutText="About TextUtils" />
      {/* <Nav /> */}
      <Router>
        {" "}
        <Nav
          title="TextUtils"
          aboutText="about"
          mode={mode}
          /*  newmode={newmode} */
          toggleMode={toggleMode}
          /* newtoggleMode={newtoggleMode} */
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} toggleMode={toggleMode} />}
            />

            {/*  <About />
            </Route> */}

            <Route
              exact
              path="/"
              element={
                <Text
                  showAlert={showAlert}
                  heading="Enter  text to analyze."
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
