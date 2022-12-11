import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sling as Hamburger } from "hamburger-react";
import "./Header.css";
import "../../main";

const Header = () => {
  const [isMoblie, setIsMobile] = useState(false);

  const toggleHamburger = () => {
    setIsMobile(!isMoblie);
  };

  return (
    <>
      <header id="header" className="menu-container">
        <nav className="menu">
          <a href="/" className="logo">
            <img
              src="https://solea-central.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg"
              alt="Logo"
            />
          </a>
          <a href="/subscribe" className="watchSubscribe">
            Смотреть по подписке
          </a>
          <ul className={isMoblie ? "nav-items-moblie" : "nav-items"}>
            <li>
              <Link to="/Coming" className="coming">
                Что нового
              </Link>
            </li>
            <li>
              <Link to="/Movies" className="film">
                Фильмы
              </Link>
            </li>
            <li>
              <Link to="/Serials" className="serial">
                Сериалы
              </Link>
            </li>
            <li>
              <Link to="/Multfilms" className="multfilm">
                Мультфильмы
              </Link>
            </li>
            <li>
              <Link to="/Login" className="log-btn">
                Войти
              </Link>
            </li>
            {/* <Link to="/Register" className="register-btn">
              Регистрация
            </Link> */}
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
