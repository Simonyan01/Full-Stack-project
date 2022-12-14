import React from "react";
import Main from "../main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Register from "../Components/Login/Register";
import Login from "../Components/Login/Login";
import Movies from "../Components/Search/Movies";
import Watch from "../Components/Movies/Watch/Watch"
import StripeContainer from "../Components/Payment/StripeContainer";
import Finality from "../Components/Payment/Finality";

function FullStack() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:id" element={<Watch />} />
        <Route path="/subscribe" element={<StripeContainer />} />
        <Route patc="subscribe/:complete" element={<Finality />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default FullStack;
