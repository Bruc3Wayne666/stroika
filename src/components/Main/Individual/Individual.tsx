import React from "react";
import cls from "./Individual.module.scss";
import left from "../../../assets/sections/individual/left.jpg";
import right from "../../../assets/sections/individual/right.jpg";

const Individual = () => {
  return (
    <section className={cls.individual}>
      <div className={cls.titleBlock}>
        <h2 className={cls.title}>Индивидуальный проект:</h2>
      </div>

      <div className={cls.content}>
        <div className={cls.left}>
          <div className={cls.items}>
            <div className={cls.item}>
              Площадь дома создана под ваши пожелания
            </div>
            <div className={cls.item}>Проект создается под ваш бюджет</div>
            <div className={cls.item}>
              В проекте будут подходящие для вас материалы
            </div>
          </div>
          <img src={left} alt="" />
        </div>
        <div className={cls.right}>
          <img src={right} alt="" />
          <div className={cls.toLeft}>
            <div className={cls.items}>
              <div className={cls.item}>Состав проекта устанавливаете вы</div>
              <div className={cls.item}>
                Проект создается с учетом рельефа вашего участка
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Individual;
