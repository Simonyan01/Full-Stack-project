/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import Loading from "../Loading/Load";
import useAuth from "./context/useAuth"
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import "../../main";

const LOGIN_URL = 'http://localhost:8080/api/v1/auth/login';

function Login() {
  const data = {
    email: "",
    password: "",
  }

  const userRef = useRef();
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(data);
  const { setAuth } = useAuth()
  const { email, password } = user

  const handleChange = (value, key) => {
    setUser({ ...user, [key]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    userRef.current.focus()
    const body = { email, password }
    const response = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      body: JSON.stringify(body),
    })
    const res = await response.json()
    if (res.token) {
      setAuth(res.token)
      setUser(data);
      navigate(from, { replace: true })
      localStorage.setItem("token", res.token)
    }
  }

  return (
    <>
      {
        loading ? <Loading loading={loading} setLoading={setLoading} /> : (
          <div className="login-main">
            <section className="container">
              <form onSubmit={handleSubmit} className="page">
                <h2 className="other_text">Здравствуй</h2>
                <div className="Input-container">
                  <input
                    className="Input-email"
                    id="email"
                    ref={userRef}
                    type="email"
                    placeholder="Электронная почта"
                    autoComplete="off"
                    onChange={(e) => handleChange(e.target.value, "email")}
                    value={user.email}
                    required
                  />
                  <input
                    className="Input-password"
                    id="password"
                    type="password"
                    ref={userRef}
                    placeholder="Пароль"
                    autoComplete="off"
                    onChange={(e) => handleChange(e.target.value, "password")}
                    value={user.password}
                    required
                  />
                </div>
                <div className="button-contaIner">
                  <button className="login-btn">Войти</button>
                </div>
                <Link to="/register">
                  <h5 className="register-button">Регистрация</h5>
                </Link>
              </form>
            </section>
          </div>
        )}
    </>
  );
}

export default Login;
