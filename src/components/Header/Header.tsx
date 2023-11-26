import React from "react";
import cls from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";
import Button, { ButtonAppearance } from "../Button/Button";

const Header = () => {
  return (
    <header className={cls.header}>
      <Navbar />

      <div className={cls.titleBlock}>
        <div className="container">
          <h1 className={cls.title}>
            Живите в доме, каждый сантиметр которого продуман для вас
          </h1>
          <h2 className={cls.subtitle}>
            Получи проект частного дома и узнай стоимость его строительства
          </h2>
        </div>
      </div>

      <div className={cls.footer}>
        <div className="container">
          <div className={cls.buttons}>
            <Button
              text={"Посмотреть готовые проекты"}
              appearance={ButtonAppearance.common}
            />
            <Button
              text={"Заказать индивидуальный проект"}
              appearance={ButtonAppearance.common}
              light
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
