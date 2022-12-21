/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Register.css";

const REGISTER_URL = "http://localhost:8080/api/v1/auth/sign-in"

const USER_REGEX = /^[a-zA-Zа-яА-Я][a-zа-яA-ZА-Я0-9_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9])(?=.*[!@#$%?&]).{8,24}/;
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

function Register() {

  const userRef = useRef()
  const [success, setSuccess] = useState(false)

  // Form with its function
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

  // Validation with its function
  const [validate, setValidate] = useState({
    fname: false,
    lname: false,
    email: false,
    pwd: false,
    match: false
  })

  const handleValidate = (result, key) => {
    setValidate({ ...validate, [key]: result })
  }

  // Focus of field with its function
  const [focus, setFocus] = useState({
    fnameFocus: false,
    lnameFocus: false,
    emailFocus: false,
    pwdFocus: false,
    matchFocus: false
  })

  const handleFocus = (result, key) => {
    setFocus({ ...focus, [key]: result })
  }

  useEffect(() => {
    // First name
    handleValidate(USER_REGEX.test(form.firstName), "fname")
    // Last name
    handleValidate(USER_REGEX.test(form.lastName), "lname")
    // Email
    handleValidate(EMAIL_REGEX.test(form.email), "email")
    // Password and confirm password
    handleValidate(PWD_REGEX.test(form.password), "pwd")
    const match = form.password === form.confirm
    handleValidate(match, "match")
  }, [form, form.firstName, form.lastName, form.email, form.password, form.confirm]);

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
          <div className="contaIner">
            <h2 className="text">Регистрация</h2>
            <form onSubmit={handleSubmit} id="page">
              <div className="input-container">
                <FontAwesomeIcon icon={faCheck} className={validate.fname ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validate.fname || !form.firstName ? "hide" : "invalid"} />
                <input
                  className="input-username"
                  type="text"
                  name="fname"
                  ref={userRef}
                  placeholder="Имя"
                  value={form.firstName}
                  aria-describedby="uidnote"
                  aria-invalid={validate.fname ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "firstName")}
                  onFocus={() => handleFocus(true)}
                  onBlur={() => handleFocus(false)}
                  required
                />
                <p id="uidnote" className={focus.fnameFocus && form.firstName && !validate.fname ? "instructions" : "offscreen"}>
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
                  name="lname"
                  ref={userRef}
                  placeholder="Фамилия"
                  value={form.lastName}
                  aria-invalid={validate.lname ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "lastName")}
                  required
                />
                <p className={focus.lnameFocus && form.lastName && !validate.lname ? "instructions-2" : "offscreen"}>
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
                  name="email"
                  ref={userRef}
                  placeholder="Электронная почта"
                  value={form.email}
                  aria-invalid={validate.email ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "email")}
                  required
                />
                <p className={focus.emailFocus && !validate.email ? "instructions-3" : "offscreen"}>
                  <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                  Please enter a valid<br /> email address
                </p>
                <FontAwesomeIcon icon={faCheck} className={validate.pwd ? "validFour" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validate.pwd || !form.password ? "hide" : "invalidFour"} />
                <input
                  className="input-password"
                  type="password"
                  name="pwd"
                  placeholder="Пароль"
                  value={form.password}
                  aria-invalid={validate.pwd ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "password")}
                  required
                />
                <p className={focus.pwdFocus && !validate.pwd ? "instructions-4" : "offscreen"}>
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
                  name="match"
                  placeholder="Потвердить пароль"
                  value={form.confirm}
                  aria-invalid={validate.match ? "false" : "true"}
                  onChange={(e) => handleChange(e.target.value, "confirm")}
                  onFocus={() => handleFocus(true)}
                  onBlur={() => handleFocus(false)}
                  required
                />
                <p className={focus.matchFocus && !validate.match ? "instructions-5" : "offscreen"}>
                  <FontAwesomeIcon className="icon" icon={faInfoCircle} />
                  Must match the first<br /> password input field .
                </p>
              </div>
              <div className="button-container">
                <button  className="login-button">Зарегистрироваться</button>
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
