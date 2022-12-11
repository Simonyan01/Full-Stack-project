/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import "../../main";
import axios from '../../api/axios';
import AuthContext from "../../context/AuthProvider"

const LOGIN_URL = '/auth';

function LoginPage() {
  const data = {
    name: "",
    password: "",
  }

  const userRef = useRef();
  const errRef = useRef();
  const { setAuth } = useContext(AuthContext)

  // const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(data);
  const [err, setErr] = useState('')
  const [success, setSuccess] = useState(false)


  useEffect(() => {
    setErr('')
  }, [form, form.name, form.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    userRef.current.focus()
    try {

      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ ...form }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ ...form, roles, accessToken });
      setForm({ ...form, name: "", password: "" })
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErr('No Server Response');
      } else if (err.response?.status === 400) {
        setErr('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErr('Unauthorized');
      } else {
        setErr('Login Failed');
      }
      errRef.current.focus();
    }
  }

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <Link to="/">Home</Link>
        </section>
      ) : (
        <div className="login-main">
          <section className="container">
            <form onSubmit={handleSubmit} className="page">
              <h2 className="other_text">Здравствуй</h2>
              <div className="Input-container">
                <input
                  className="Input-username"
                  id="username"
                  ref={userRef}
                  type="text"
                  placeholder="Логин"
                  autoComplete="off"
                  onChange={(e) => setForm(e.target.value)}
                  value={form.name}
                  required
                />
                <input
                  className="Input-password"
                  id="password"
                  ref={userRef}
                  type="password"
                  placeholder="Пароль"
                  autoComplete="off"
                  onChange={(e) => setForm(e.target.value)}
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
      )}
    </>
  );
}

export default LoginPage;
