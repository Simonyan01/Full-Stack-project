/* eslint-disable no-unused-vars */

import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.css";

const USER_REGEX = /^[a-zA-Zа-яА-Я][a-zа-яA-ZА-Я0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])(?=.*[!@#$%?&]).{8,24}/;
const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/;
const REGISTER_URL = "/register"


function Register() {
  const errRef = useRef();

  const [firstName, setFirstName] = useState("")
  const [validFname, setValidFname] = useState(false)
  const [fnameFocus, setFnameFocus] = useState(false)

  const [lastName, setLastName] = useState("")
  const [validLname, setValidLname] = useState(false)
  const [lnameFocus, setLnameFocus] = useState(false)

  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("")
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [confirm, setConfirm] = useState("")
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [success, setSuccess] = useState(false)


  // First name
  useEffect(() => {
    const result = USER_REGEX.test(firstName)
    setValidFname(result)
  }, [firstName]);
  // Last Name
  useEffect(() => {
    const result = USER_REGEX.test(lastName)
    setValidLname(result)
  }, [lastName]);
  //Email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    setValidEmail(result)
  }, [email]);
  // Password
  useEffect(() => {
    const result = PWD_REGEX.test(password)
    setValidPwd(result)
    const match = password === confirm
    setValidMatch(match)
  }, [password, confirm]);

  const [getUserData, setUserData] = useState([]);

  async function handleSubmit(e) {
    e.preventDeafalt();
    const response = await fetch("http://localhost:8080/sign-in", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        confirm
      })
    })
    const data = await response.json()
    if (response.status === 200) {
      setUserData(data);
    } else {
      console.log(data.message);
    }
  }
  useEffect(() => {
    handleSubmit();
  });
  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <p><Link to="/">Sign in</Link></p>
        </section>
      ) : (
        <section className="register-main">
          <div className="contaIner">
            <h2 className="text">Регистрация</h2>
            <form method="post" onSubmit={handleSubmit} id="page">
              <div className="input-container">
                <span className={validFname ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validFname || !firstName ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                <input
                  className="input-username"
                  id="username"
                  type="text"
                  placeholder="Имя"
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  aria-invalid={validFname ? "false" : "true"}
                  onBlur={() => setFnameFocus(false)}
                  onFocus={() => setFnameFocus(true)}
                />
                <span className={validLname ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validLname || !lastName ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                <input
                  className="input-lastname"
                  id="lastname"
                  type="text"
                  placeholder="Фамилия"
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  aria-invalid={validLname ? "false" : "true"}
                  onBlur={() => setLnameFocus(false)}
                  onFocus={() => setLnameFocus(true)}
                />
                <span className={validEmail ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validEmail || !email ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                <input
                  className="input-email"
                  id="email"
                  type="email"
                  placeholder="Электронная почта"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailFocus(false)}
                  onFocus={() => setEmailFocus(true)}
                />
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
                <input
                  className="input-password"
                  id="password"
                  type="password"
                  placeholder="Пароль"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  aria-invalid={validPwd ? "false" : "true"}
                  onBlur={() => setPwdFocus(false)}
                  onFocus={() => setPwdFocus(true)}
                />
                <FontAwesomeIcon icon={faCheck} className={validMatch && confirm ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validMatch || !confirm ? "hide" : "invalid"} />
                <input
                  className="input-reset-pwd"
                  id="confirm_pwd"
                  type="password"
                  placeholder="Потвердить пароль"
                  autoComplete="off"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  aria-invalid={validMatch ? "false" : "true"}
                  onBlur={() => setMatchFocus(false)}
                  onFocus={() => setMatchFocus(true)}
                />
              </div>
              <div className="button-container">
                <button className="login-button" disabled={!validFname || !validLname || !validEmail || !validPwd || !validMatch ? true : false}>Зарегистрироваться</button>
              </div>
              <Link to="/login">
                <h4 className="button-of-register">УЖЕ ЗАРЕГИСТРИРОВАН?</h4>
              </Link>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Register;
