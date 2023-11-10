import { FC } from "react";

import styles from "./SwitchButton.module.scss";

interface SwitchButtonProps {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const SwitchButton: FC<SwitchButtonProps> = ({
  isChecked,
  onChange,
  label,
}) => {
  return (
    <label className={styles["switch-button"]}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className={styles["switch-button__slider"]}></span>
      {label && <span className={styles["switch-button__label"]}>{label}</span>}
    </label>
  );
};

export { SwitchButton };
