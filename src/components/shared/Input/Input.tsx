import { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<CustomInputProps> = ({ className, ...props }) => {
  // console.log("props:", props);

  return (
    <input className={`${styles["input"]} ${className || ""}`} {...props} />
  );
};

export { Input };
