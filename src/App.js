import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLinks from "./components/HeaderLinks";

import Projects from "./Projects";
import Education from "./Education";
import Bill from "./Bill";
import Login from "./Login";
import Feedback from "./Feedback";
import Home from ".";

function headerList() {}
function App() {
  return (
    <div>
      <Router>
        <HeaderLinks />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/Bill" element={<Bill />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
