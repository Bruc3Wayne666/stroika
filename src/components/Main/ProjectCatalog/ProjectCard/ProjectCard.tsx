import React, { FC } from "react";
import cls from "./ProjectCard.module.scss";
import house from "../../../../assets/temp/house.png";
import Button, { ButtonAppearance } from "../../../Button/Button";

interface CardProps {
  offset?: boolean;
}

const ProjectCard: FC<CardProps> = ({ offset }) => {
  return (
    <div className={`${cls.card} ${offset && cls.offset}`}>
      <div className={cls.image}>
        <img src={house} alt="" />
      </div>
      <div className={cls.info}>
        <div className={cls.type}>Одноэтажные</div>
        <div className={cls.item}>
          <div className={cls.number}>A-17</div>
          <div className={cls.price}>40 000₽</div>
        </div>
        <div className={cls.dimensions}>
          Габариты: 23,2 х 11,8 Площадь: 263,68 м²
        </div>
      </div>
      <div className={cls.buttons}>
        <Button appearance={ButtonAppearance.cart} />
        <Button text={"Подробнее"} appearance={ButtonAppearance.more} />
      </div>
    </div>
  );
};

export default ProjectCard;
