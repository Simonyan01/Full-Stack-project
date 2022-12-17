/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";
import AuthContext from "./context/AuthProvider"
import { Link } from "react-router-dom";
import 'animate.css';
import "./Login.css";
import "../../main";

const LOGIN_URL = 'http://localhost:8080/api/v1/auth/login';

function LoginPage() {
  const data = {
    email: "",
    password: "",
  }

  const userRef = useRef();
  const errRef = useRef();

  const { setAuth } = useContext(AuthContext)
  const [user, setUser] = useState(data);
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setError('')
  }, [user, user.email, user.password]);

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
      body: JSON.stringify(body),

    })
    const res = await response.json()
    if (res.token) {
      localStorage.setItem("token", res.token)
      setAuth(true)
      setUser(data);
      setSuccess(true);
    }
    errRef.current.focus();
  }

  return (
    <>
      {success ? <div>
        <h1 className="loginText animate__animated animate__backInDown">Приятного просмотра</h1>
        <Link to="/" className="login">Домой</Link>
      </div> : (
        <div className="login-main">
          <section className="container">
            <form onSubmit={handleSubmit} className="page">
              <p ref={errRef} className={error ? "errmsg" : "offscreen"} aria-live="assertive">{error}</p>
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

export default LoginPage;
