import React from "react";

import logo from "../assets/logo.jpg";
import avatar from "../assets/avatar.jpg";

const mainNav = ["Collections", "Discover", "Feed"];

const activeIndex = 0;

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__menu">
          <div className="header__menu__left">
            <div className="header__menu__left__logo">
              <img src={logo} alt="" />
            </div>
            <div className="header__menu__left__nav">
              {mainNav.map((item, index) => (
                <div
                  className={`header__menu__left__nav__item ${
                    index === activeIndex ? "active" : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right__icon">
              <div className="header__menu__right__icon__message">
                <i className="bx bx-message-rounded-detail"></i>
              </div>
              <div className="header__menu__right__icon__bell">
                <i className="bx bx-bell"></i>
                <span className="notify bg-orange"></span>
              </div>
            </div>
            <div className="header__menu__right__avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="header__menu__right__btn">
              <button className="btn bg-blue color-white">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
