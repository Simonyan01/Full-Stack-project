import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Register from "../Components/Authentication/Register";
import Login from "../Components/Authentication/Login";
import Movies from "../Components/Search/Movies";
import Watch from "../Components/Movies/Watch/Watch"
import RequireAuth from "../Components/Authentication/context/RequireAuth";
import StripeContainer from "../Components/Payment/StripeContainer";
import Finality from "../Components/Payment/Finality";
import { loadStripe } from "@stripe/stripe-js";
import Main from "../main";

function FullStack() {

  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    fetch("/subscribe").then(async (res) => {
      const { publishableKey } = await res.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:id" element={<Watch />} />
          <Route path="/subscribe" element={<StripeContainer stripePromise={stripePromise} />} />
          <Route path="/subscribe/complete" element={<Finality  />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default FullStack;
