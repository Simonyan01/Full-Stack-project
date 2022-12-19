/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link} from "react-router-dom";
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
              <Link to="/" className="home">
                Мой Иви
              </Link>
            </li>
            <li>
              <Link to="/movies" className="film">
                Фильмы
              </Link>
            </li>
            <li>
              {/* {isLogin ? <Link to="/logout"  className="log-btn">
                Выйти
              </Link> : */}
                <Link to="/login" className="log-btn">
                  Войти
                </Link>
              {/* } */}
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
