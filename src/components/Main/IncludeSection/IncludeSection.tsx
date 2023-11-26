import React from "react";
import cls from "./IncludeSection.module.scss";
import Item from "./Item/Item";
import house from "../../../assets/sections/includes/house.jpg";
import Button, { ButtonAppearance } from "../../Button/Button";

const IncludeSection = () => {
  return (
    <section className={cls.includes}>
      <div className={cls.titleBlock}>
        <h2 className={cls.title}>Что включает в себя проект дома?</h2>
      </div>

      <div className={cls.content}>
        <div className={cls.left}>
          <div className={cls.text}>
            <p>
              Проект дома – это документ, по которому будет происходить
              строительство дома. В нем содержатся чертежи и вся необходимая
              информация о строительных конструкциях, используемых материалах,
              коммуникациях и дизайне дома. <br /> Среди них:
            </p>
          </div>

          <div className={cls.items}>
            <Item index={0} />
            <Item index={1} />
            <Item index={2} />
            <Item index={3} />
            <Item index={4} />
            <Item index={5} />
          </div>
        </div>

        <div className={cls.right}>
          <img className={cls.image} src={house} alt="" />

          <Button
            text={"Посмотреть пример проекта"}
            appearance={ButtonAppearance.common_sm}
            light
          />
        </div>
      </div>
    </section>
  );
};

export default IncludeSection;
