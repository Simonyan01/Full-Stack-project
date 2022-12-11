import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import Movies from "../Components/Search/Movies";
import Watch from "../Components/Movies/Watch"
import StripeContainer from "../Components/Payment/StripeContainer";
import Main from "../main";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:id" element={<Watch />} />
        <Route path="/subscribe" element={<StripeContainer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
