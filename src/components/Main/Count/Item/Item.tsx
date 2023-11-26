import React, { FC, useEffect, useState } from "react";
import cls from "./Item.module.scss";

interface ItemProps {
  index: number;
  title: string;
  subtitle: string;
}
const Item: FC<ItemProps> = ({ index, title, subtitle }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    const loadIcon = async () => {
      const { default: _path } = await import(
        `../../../../assets/sections/count/${++index}.svg`
      );
      setIcon(_path);
    };
    loadIcon();
  }, []);

  return (
    <div className={cls.item}>
      <img src={icon} alt="lol" />
      <span>{title}</span>
      <div className={cls.text}>{subtitle}</div>
    </div>
  );
};

export default Item;
