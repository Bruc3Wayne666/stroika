import React from "react";
import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";

export enum ButtonAppearance {
  common = "common",
  common_sm = "common_sm",
  cart = "cart",
  more = "more",
  cost = "cost",
  form = "form",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  appearance: ButtonAppearance;
  light?: boolean;
}

const Button: FC<ButtonProps> = ({ text, light, appearance }) => {
  return (
    <button
      className={`${cls.button} ${cls[appearance]} ${light && cls["light"]}`}
    >
      <span>{text && text}</span>
    </button>
  );
};

export default Button;
