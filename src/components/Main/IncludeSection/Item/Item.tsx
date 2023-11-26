import React, { FC, lazy, useEffect, useState } from "react";
import cls from "./Item.module.scss";

interface ItemProps {
  index: number;
}

const Item: FC<ItemProps> = ({ index }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    const loadIcon = async () => {
      const { default: _path } = await import(
        `../../../../assets/sections/includes/${++index}.svg`
      );
      setIcon(_path);
    };
    loadIcon();
  }, []);

  return (
    <div className={cls.item}>
      <img src={icon} alt="lol" />
      <span>Эскизный проект</span>
    </div>
  );
};

export default Item;
