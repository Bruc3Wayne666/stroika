import React from "react";
import cls from "./AskSection.module.scss";
import Accordeon from "./Accordeon/Accordeon";

const AskSection = () => {
  return (
    <section className={cls.askSection}>
      <div className="container">
        <div className={cls.titleBlock}>
          <h3 className={cls.subtitle}>FAQ</h3>
          <h2 className={cls.title}>Часто задаваемые вопросы</h2>
        </div>

        <Accordeon />
      </div>
    </section>
  );
};

export default AskSection;
