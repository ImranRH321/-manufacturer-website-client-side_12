import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>} />
     </Routes>
    </div>
  );
}

export default App;
