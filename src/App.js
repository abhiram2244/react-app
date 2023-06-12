import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Text from "./components/Text";

function App() {
  return (
    <>
      <Nav title="TextUtils" aboutText="About TextUtils" />
      {/* <Nav /> */}

      <div className="container my-3">
        {<Text heading="Enter  text to analyze." />}
        <About />
      </div>
    </>
  );
}

export default App;
