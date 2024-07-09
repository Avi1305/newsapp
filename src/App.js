import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import PropTypes from 'prop-types';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Uncomment this line

import React, { useState } from 'react';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyclass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
  }


  const toggleMode = (cls) => {
    // console.log(cls)
    removeBodyclass()

    // if (mode === "light") {
    //   setmode("dark")

    // document.body.style.backgroundColor = "#02033d";
    // showAlert("dark mode has een enabled", "success")
    // } else if (mode === "dark") {
    //   setmode("light")
    // document.body.style.backgroundColor = "#e5e6ff";
    // showAlert("light mode has een enabled", "success")
    // }
    // else {
    document.body.classList.add("bg-" + cls);
    // }

  }

  const toggleModeSwitch = () => {
    removeBodyclass()

    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "#02033d";

      showAlert("dark mode has een enabled", "success")
    } else {
      setmode("light")
      document.body.style.backgroundColor = "#e5e6ff";

      showAlert("light mode has een enabled", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleModeSwitch={toggleModeSwitch} />
        <Alert alert={alert} />
        <div className="container my-i">
          <Routes>
            <Route index element={<TextForm showalert={showAlert} heading="Try Textutils - Word counter,Character counter,Copy text " mode={mode} />} />
            {/* Remove the unused About component route */}
            <Route path='/about' element={<About mode={mode} />} />
            <Route path='/home' element={<TextForm showalert={showAlert} heading="Try Textutils - Word counter,Character counter,Copy text " mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
}

export default App;


