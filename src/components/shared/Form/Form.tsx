// import { FC, FormHTMLAttributes } from "react";

// import styles from "./Form.module.scss";

// interface CustomFormProps extends FormHTMLAttributes<HTMLFormElement> {}

// const Form: FC<CustomFormProps> = ({ children, className }) => {
//   return (
//     <form className={`${styles["form"]} ${className || ""}`}>{children}</form>
//   );
// };

// export { Form };

import { FC, FormHTMLAttributes } from "react";

import styles from "./Form.module.scss";

interface CustomFormProps extends FormHTMLAttributes<HTMLFormElement> {}

const Form: FC<CustomFormProps> = ({ className, children, ...props }) => {
  // console.log("props:", props);

  return (
    <form className={`${styles["form"]} ${className || ""}`} {...props}>
      {children}
    </form>
  );
};

export { Form };
