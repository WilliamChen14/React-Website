import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeaderLinks from "./components/HeaderLinks";


function headerList() {}
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
        </Routes>
      </Router>
      <>
        <HeaderLinks />
      </>
    </div>
  );
}

export default App;
