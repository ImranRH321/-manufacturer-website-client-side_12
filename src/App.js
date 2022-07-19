import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} />
     </Routes>
    </div>
  );
}

export default App;
