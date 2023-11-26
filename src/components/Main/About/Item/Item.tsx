import React, { FC } from "react";
import cls from "./Item.module.scss";

interface ItemProps {
  title: string;
  subtitle: string;
}
const Item: FC<ItemProps> = ({ title, subtitle }) => {
  return (
    <div className={cls.item}>
      <span>{`> ${title}`}</span>
      <div className={cls.text}>{subtitle}</div>
    </div>
  );
};

export default Item;
