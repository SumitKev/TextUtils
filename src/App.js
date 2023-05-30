import "./App.css";
import TextArea from "./components/TextArea";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState(false);
  function toggleMode() {
    setMode(!mode);
    if (document.body.style.backgroundColor === "grey") {
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success: ");
      document.title = "TextUtils - Light Mode";
    } else {
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "Success: ");
      document.title = "TextUtils - Dark Mode";
    }
  }
  //so here the alert is an object and basically initially we passing it as null
  //now with the help of the showAlert function we are setting the properties of the alert object
  const [alert, setAlert] = useState(null);
  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact
              path="/"
              element={
                <TextArea
                  mode={mode}
                  toggleMode={toggleMode}
                  showAlert={showAlert}
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
