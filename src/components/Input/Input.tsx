import React, { FC } from "react";
import cls from "./Input.module.scss";

interface InputProps {
  placeholder: string;
  type: string;
}

const Input: FC<InputProps> = (props) => {
  return <input className={cls.input} {...props} />;
};

export default Input;
