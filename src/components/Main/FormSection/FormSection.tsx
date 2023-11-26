import React from "react";
import cls from "./FormSection.module.scss";
import image from "../../../assets/sections/form/image.jpg";
import Button, { ButtonAppearance } from "../../Button/Button";
import Input from "../../Input/Input";

const FormSection = () => {
  return (
    <section className={cls.formSection}>
      <div className={cls.left}>
        <img src={image} alt="" />
      </div>
      <div className={cls.right}>
        <form>
          <h2>Остались вопросы?</h2>
          <h3>Оставьте ваш номер телефона и мы вам перезвоним!</h3>

          <div className={cls.inputs}>
            <Input type={"text"} placeholder={"Имя"} />
            <Input placeholder="+ (   ) -- -- -- --" type="tel" />
            <Input placeholder="Город" type="text" />
          </div>

          <Button text={"Отправить"} appearance={ButtonAppearance.form} />

          <div className={cls.personalData}>
            Нажимая кнопку «отправить» вы соглашаетесь на обработку персональных
            данных
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
