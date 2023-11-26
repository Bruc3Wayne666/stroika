import React from "react";
import cls from "./Partners.module.scss";
import Item from "./Item/Item";
const Partners = () => {
  return (
    <section className={cls.partners}>
      <div className={cls.titleBlock}>
        <div className={cls.title}>Наши партнёры</div>
      </div>

      <div className={cls.items}>
        <Item index={0} />
        <Item index={1} />
        <Item index={2} />
        <Item index={3} />
        <Item index={4} />
        <Item index={5} />
        <Item index={6} />
      </div>
    </section>
  );
};

export default Partners;
