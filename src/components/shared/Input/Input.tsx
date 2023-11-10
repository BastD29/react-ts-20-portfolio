// import { FC, InputHTMLAttributes } from "react";

// import styles from "./Input.module.scss";

// interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

// const Input: FC<CustomInputProps> = ({ className, ...props }) => (
//   <input className={`${styles["input"]} ${className || ""}`} {...props} />
// );

// export { Input };

// import { FC, InputHTMLAttributes } from "react";

// import styles from "./Input.module.scss";

// interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

// const Input: FC<CustomInputProps> = ({ className, ...props }) => {
//   console.log("props:", props);

//   return (
//     <input className={`${styles["input"]} ${className || ""}`} {...props} />
//   );
// };

// export { Input };

import { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<CustomInputProps> = ({ className, value, onChange }) => {
  return (
    <input
      className={`${styles["input"]} ${className || ""}`}
      value={value}
      onChange={onChange}
    />
  );
};

export { Input };
