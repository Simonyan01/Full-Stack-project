/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Loading from '../Loading/Load';
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Header.css";

const Header = () => {
  const [isMoblie, setIsMobile] = useState(false);
  const [logout, setLogout] = useState(false);
  const [loading, setLoading] = useState(true);
  const success = localStorage.getItem("token")

  const toggleHamburger = () => {
    setIsMobile(!isMoblie);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setLogout(true);
  };

  return (
    <>
        <header id="header" className="menu-container">
          <nav className="menu">
            <Link to="/" className="logo">
              <img
                src="https://solea-central.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
                alt="Logo"
              />
            </Link>
            <Link to={success ? '/subscribe' : '/login'} className="watchSubscribe">
              Смотреть по подписке
            </Link>
            <ul className={isMoblie ? "nav-items-moblie" : "nav-items"}>
              <li>
                <Link to="/" className="home">
                  Мой Иви
                </Link>
              </li>
              <li>
                {
                  <Link to={success ? '/movies' : '/login'} className="film">
                    Фильмы
                  </Link>
                }
              </li>
              <li>
                {success ?
                  <Link to="/" onClick={logoutHandler} className="log-btn">
                Выйти
              </Link> :
              <Link to="/login" className="log-btn">
                Войти
              </Link>
                }
            </li>
          </ul>
          <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger />
          </div>
        </nav>
        </header>
    </>
  );
};

export default Header;
