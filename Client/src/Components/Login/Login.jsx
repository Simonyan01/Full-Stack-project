/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../../main";
import AuthContext from "../../context/AuthProvider"

const LOGIN_URL = 'http://localhost:8080/api/v1/auth/login';

function LoginPage() {
  const data = {
    email: "",
    password: "",
  }

  const userRef = useRef();
  const errRef = useRef();

  const { setAuth } = useContext(AuthContext)
  const [form, setForm] = useState(data);
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    setError('')
  }, [form, form.email, form.password]);

  const handleChange = (value, key) => {
    setForm({ ...form, [key]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    userRef.current.focus()

    const response = await fetch(LOGIN_URL,
      JSON.stringify({ ...form }),
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
    );
    const accessToken = response.data.accessToken;
    const roles = response.data.roles;
    setAuth({ ...form, roles, accessToken });
    setForm({ ...form, email: "", password: "" })
    setSuccess(true);
    if (!error.response) {
      setError('No Server Response');
    } else if (error.response?.status === 400) {
      setError('Missing Email or Password');
    } else if (error.response?.status === 401) {
      setError('Unauthorized');
    } else {
      setError('Login Failed');
    }
    errRef.current.focus();
  }

  return (
    <>
      {!success ? (
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
                  autoComplete="on"
                  onChange={(e) => handleChange(e.target.value, "email")}
                  value={form.email}
                  required
                />
                <input
                  className="Input-password"
                  id="password"
                  ref={userRef}
                  type="password"
                  placeholder="Пароль"
                  autoComplete="off"
                  onChange={(e) => handleChange(e.target.value, "password")}
                  value={form.password}
                  required
                />
              </div>
              <div className="button-contaIner">
                <button className="login-btn">Войти</button>
              </div>
              <Link to="/register">
                <h5 className="register-button">Регистрация</h5>
                <hr />
              </Link>
            </form>
          </section>
        </div>
      ) : (
        <section>
          <h1>Registration failed</h1>
          <Link to="/register">Try again</Link>
        </section>
      )}
    </>
  );
}

export default LoginPage;
