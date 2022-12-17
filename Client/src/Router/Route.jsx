import React from "react";
import Main from "../main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Register from "../Components/Login/Register";
import Login from "../Components/Login/Login";
import Movies from "../Components/Search/movies";
import Watch from "../Components/Movies/Watch/Watch"
import StripeContainer from "../Components/Payment/StripeContainer";
import Finality from "../Components/Payment/Finality";

function FullStack() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="movies/:id" element={<Watch />} />
        <Route exact path="/subscribe" element={<StripeContainer />} />
        <Route exact path="subscribe/:complete" element={<Finality />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default FullStack;
