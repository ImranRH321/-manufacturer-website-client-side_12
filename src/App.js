import React from "react";
import {Routes, Route} from "react-router-dom";
import "./App.css";

import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Orders from "./Pages/Dashboard/Orders";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import PurchaseDetails from "./Pages/Services/PurchaseDetails";
import Navbar from "./Pages/Shared/Navbar";
import NotFound from "./Pages/Shared/NotFound";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home></Home>} />

      <Route path="/details/:serviceId" element={<RequireAuth>
        <PurchaseDetails></PurchaseDetails>
      </RequireAuth>} />
      
      <Route path="/dashboard" element={<RequireAuth>
        <Dashboard></Dashboard>
      </RequireAuth>}>
      <Route path="orders" element={<Orders></Orders>} />
      <Route path="addReview" element={<AddReview></AddReview>} />
      <Route path="myProfile" element={<MyProfile></MyProfile>} />
      </Route>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register></Register>} />
      <Route path="*" element={<NotFound></NotFound>} />
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
