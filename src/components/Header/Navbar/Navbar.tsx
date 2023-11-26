import React from "react";
import cls from "./Navbar.module.scss";
import logo from "../../../assets/header/logo.svg";
import cart from "../../../assets/header/cart.svg";

const links = ["Каталог проектов", "О компании", "Услуги", "Аккаунт", ""];

const Navbar = () => {
  return (
    <nav className={cls.navbar}>
      <div className={cls.logo}>
        <a href="">
          <img src={logo} alt="" />
        </a>
      </div>
      <ul className={cls.list}>
        {links.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
      <div className={cls.cart}>
        <a href="">
          <img src={cart} alt="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
