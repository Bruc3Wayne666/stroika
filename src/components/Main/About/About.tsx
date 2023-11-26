import React from "react";
import cls from "./About.module.scss";
import Item from "./Item/Item";

const AboutSection = () => {
  return (
    <section className={cls.about}>
      {/*<img className={cls.bg} src={bg} alt="" />*/}
      <div className="container">
        <div className={cls.titleBlock}>
          <h2 className={cls.title}>О нас в цифрах</h2>
        </div>

        <div className={cls.items}>
          <Item title={"35 000 м²"} subtitle={"общей площади спроектировано"} />
          <Item title={"300"} subtitle={"довольных клиентов"} />
          <Item title={"8"} subtitle={"лет опыта в проектировании"} />
          <Item title={"15"} subtitle={"лет опыта в строительстве"} />
          <Item
            title={"90"}
            subtitle={"готовых проектов\n" + "частных домов"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
