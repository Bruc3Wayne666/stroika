import React from "react";
import cls from "./Count.module.scss";
import Item from "./Item/Item";
import Button, { ButtonAppearance } from "../../Button/Button";

const CountSection = () => {
  return (
    <section className={cls.countSection}>
      {/*<img className={cls.bg} src={bg} alt="" />*/}
      <div className="container">
        <div className={cls.titleBlock}>
          <h2 className={cls.title}>
            Рассчитайте стоимость проектирования за 1 минуту и получите
            дизайн-проект <span>в подарок</span>
          </h2>
        </div>

        <div className={cls.buttons}>
          <Button
            text={"Узнать стоимость"}
            appearance={ButtonAppearance.common_sm}
          />
          <Button
            text={"Посмотреть готовые проекты"}
            appearance={ButtonAppearance.common_sm}
            light
          />
        </div>

        <div className={cls.benefits}>
          <div className={cls.benTitle}>Вы получите:</div>
          <div className={cls.items}>
            <Item
              title={"Оптимизация затрат на строительство"}
              index={0}
              subtitle={"Сократите расходы"}
            />
            <Item
              title={"Эксклюзивный дизайн"}
              index={1}
              subtitle={
                "Который делает дом комфортным, и функциональным именно для Вас"
              }
            />
            <Item
              title={"Гарантия"}
              index={2}
              subtitle={
                "Что ваш дом будет соответствовать всем нормам и требованиям"
              }
            />
            <Item
              title={"Сэкономленное время"}
              index={3}
              subtitle={
                "Ускорение всех этапов строительства и ввода объекта в эксплуатацию"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountSection;
