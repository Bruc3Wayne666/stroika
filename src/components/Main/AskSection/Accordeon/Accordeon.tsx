import React from "react";
import cls from "./Accordeon.module.scss";

const Accordeon = () => {
  return (
    <div>
      <div className={cls.items}>
        <div className={cls.item}>
          <div className={cls.key}>Зачем нужен проект дома?</div>
          <div className={cls.value}>Зачем-то нужен</div>
        </div>

        <div className={cls.item}>
          <div className={cls.key}>
            Возможно ли внести изменения в уже существующий проект?&nbsp;Если
            да, то сколько это стоит?
          </div>
          <div className={cls.value}>Зачем-то нужен</div>
        </div>

        <div className={cls.item}>
          <div className={cls.key}>
            Что такое Авторский надзор и нужен ли он?
          </div>
          <div className={cls.value}>Зачем-то нужен</div>
        </div>

        <div className={cls.item}>
          <div className={cls.key}>
            Лучше делать индивидуальный проект или купить готовый?
          </div>
          <div className={cls.value}>Зачем-то нужен</div>
        </div>

        <div className={cls.item}>
          <div className={cls.key}>
            В чем различие между эскизным и архитектурным проектом?
          </div>
          <div className={cls.value}>Зачем-то нужен</div>
        </div>

        <div className={cls.item}>
          <div className={cls.key}>В каком формате я получу проект?</div>
          <div className={cls.value}>Зачем-то нужен</div>
        </div>

        <div className={cls.item}>
          <div className={cls.key}>Как купить?</div>
          <div className={cls.value}>Зачем-то нужен</div>
        </div>
      </div>
    </div>
  );
};

export default Accordeon;
