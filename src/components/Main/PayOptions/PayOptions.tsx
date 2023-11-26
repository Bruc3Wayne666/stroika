import React from "react";
import cls from "./PayOptions.module.scss";
import Item from "./Item/Item";

const PayOptions = () => {
  return (
    <section className={cls.payOptions}>
      <div className={cls.titleBlock}>
        <div className={cls.title}>Способы оплаты</div>
      </div>

      <div className={cls.items}>
        <Item index={0} />
        <Item index={1} />
        <Item index={2} />
      </div>
    </section>
  );
};

export default PayOptions;
