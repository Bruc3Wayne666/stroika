import React, { FC, useEffect, useState } from "react";

interface ItemProps {
  index: number;
}

const Item: FC<ItemProps> = ({ index }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    const loadIcon = async () => {
      const { default: _path } = await import(
        `../../../../assets/sections/payopts/${++index}.svg`
      );
      setIcon(_path);
    };
    loadIcon();
  }, []);

  return <img src={icon} alt="" />;
};

export default Item;
