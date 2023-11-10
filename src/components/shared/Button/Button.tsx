import React, { ButtonHTMLAttributes, FC } from "react";
import { Icon } from "../Icon/Icon";

import styles from "./Button.module.scss";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactElement;
  // onClick: () => void;
}

const Button: FC<CustomButtonProps> = ({ text, icon, className }) => (
  <button className={`${styles["button"]} ${className || ""}`}>
    {text && <span className={styles["button__text"]}>{text}</span>}
    {icon && <Icon icon={icon} />}
  </button>
);

export { Button };
