/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.css";

const REGISTER_URL = "http://localhost:8080/api/v1/auth/sign-in"

const USER_REGEX = /^[a-zA-Zа-яА-Я][a-zа-яA-ZА-Я0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])(?=.*[!@#$%?&]).{8,24}/;
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

function Register() {

  const userRef = useRef()
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  // const [focus, setFocus] = useState(false)

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: ""
  })
  const handleChange = (value, key) => {
    setForm({ ...form, [key]: value })
  }

  const [validate, setValidate] = useState({
    fname: false,
    lname: false,
    email: false,
    pwd: false,
    match: false
  })

  // const handleValidate = () => {
  //   setValidate(current => !current);
  // }

  // First name
  useEffect(() => {
    const result = USER_REGEX.test(form.firstName)
    setValidate(result)
  }, [form.firstName]);
  // Last Name
  useEffect(() => {
    const result = USER_REGEX.test(form.lastName)
    setValidate(result)
  }, [form.lastName]);
  //Email
  useEffect(() => {
    const result = EMAIL_REGEX.test(form.email)
    setValidate(result)
  }, [form.email]);
  // Password
  useEffect(() => {
    const result = PWD_REGEX.test(form.password)
    setValidate(result)
    const match = form.password === form.confirm
    setValidate(match)
  }, [form.password, form.confirm]);

  useEffect(() => {
    setErrMsg('');
  }, [form])

  const [userData, setUserData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    userRef.current.focus()
    const response = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      body: JSON.stringify({
        ...form
      })
    })
    const data = await response.json()
    if (response.status === 201) {
      console.log(data);
      setUserData(data);
      setSuccess(true);
    } else {
      console.log(data.message);
    }
  }

  return (
    <>
      {success ? (
        <div>
          <h1 className="registerText">Вы зарегистрировались успешно</h1>
          <Link to="/login" className="login">Войти</Link>
        </div>
      ) : (
        <section className="register-main">
          <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <div className="contaIner">
            <h2 className="text">Регистрация</h2>
            <form onSubmit={handleSubmit} id="page">
              <div className="input-container">
                <FontAwesomeIcon icon={faCheck} className={validate.fname ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validate.fname || !form.firstName ? "hide" : "invalid"} />
                <input
                  className="input-username"
                  type="text"
                  ref={userRef}
                  placeholder="Имя"
                  autoComplete="off"
                  value={form.firstName}
                  aria-invalid={validate.fname ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "firstName")}
                  required
                />
                <p className={validate.fname ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters,numbers,underscores <br /> allowed.
                </p>
                <FontAwesomeIcon icon={faCheck} className={validate.lname ? "validTwo" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validate.lname || !form.lastName ? "hide" : "invalidTwo"} />
                <input
                  className="input-lastname"
                  type="text"
                  ref={userRef}
                  placeholder="Фамилия"
                  autoComplete="off"
                  value={form.lastName}
                  aria-invalid={validate.lname ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "lastName")}
                  required
                />
                <p className={validate.lname ? "instructions-2" : "offscreen"}>
                  <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                  4 to 24 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, <br />underscores allowed.
                </p>
                <FontAwesomeIcon icon={faCheck} className={validate.email ? "validThree" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validate.email || !form.email ? "hide" : "invalidThree"} />
                <input
                  className="input-email"
                  type="email"
                  ref={userRef}
                  placeholder="Электронная почта"
                  autoComplete="off"
                  value={form.email}
                  aria-invalid={validate.email ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "email")}
                />
                <p className={validate.email ? "instructions-3" : "offscreen"}>
                  <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                  Please enter a valid<br /> email address
                </p>
                <FontAwesomeIcon icon={faCheck} className={validate.pwd ? "validFour" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validate.pwd || !form.password ? "hide" : "invalidFour"} />
                <input
                  className="input-password"
                  type="password"
                  placeholder="Пароль"
                  autoComplete="off"
                  value={form.password}
                  aria-invalid={validate.pwd ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "password")}
                />
                <p className={validate.pwd ? "instructions-4" : "offscreen"}>
                  <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                  8 to 24 characters.<br />
                  Must include uppercase and <br />lowercase letters, a number and<br /> a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
                <FontAwesomeIcon icon={faCheck} className={validate.match && form.confirm ? "validFive" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validate.match || !form.confirm ? "hide" : "invalidFive"} />
                <input
                  className="input-reset-pwd"
                  type="password"
                  placeholder="Потвердить пароль"
                  autoComplete="off"
                  value={form.confirm}
                  aria-invalid={validate.match ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "confirm")}
                />
                <p className={validate.match ? "instructions-5" : "offscreen"}>
                  <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                  Must match the first<br /> password input field .
                </p>
              </div>
              <div className="button-container">
                <button className="login-button">Зарегистрироваться</button>
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
