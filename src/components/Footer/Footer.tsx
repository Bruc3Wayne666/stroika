import React from "react";
import cls from "./Footer.module.scss";
import logo from "../../assets/footer/logo.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import vk from "../../assets/footer/vk.svg";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <div className="container">
        <div className={cls.top}>
          <div className={cls.logo}>
            <img src={logo} alt="" />
            <div className={cls.text}>
              Современное жилье созданное специально для Вас
            </div>
          </div>
          <div className={cls.sections}>
            <div className={cls.title}>Разделы</div>
            <ul>
              <li>Главная страница</li>
              <li>Каталог проектов</li>
              <li>О компании</li>
              <li>Корзина</li>
              <li>Услуги</li>
            </ul>
          </div>
          <div className={cls.contacts}>
            <div className={cls.title}>Как с нами связаться</div>
            <ul>
              <li>+7 (967) 770 66 88</li>
              <li>m550ae@gmail.com</li>
              <li>Вконтакте</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cls.bottom}>
        <div className="container">
          <div className={cls.row}>
            <div className={cls.text}>Copyright © 2023 Все права защищены</div>
            <div className={cls.socials}>
              <img src={linkedin} alt="" />
              <img src={vk} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
