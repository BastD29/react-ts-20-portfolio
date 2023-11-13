import { FC, ReactNode } from "react";

import { useSelector } from "react-redux";
import { themeSelectors } from "../../../store/theme";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout: FC<LayoutProps> = ({ children, className }) => {
  const darkMode = useSelector(themeSelectors.getTheme);

  return (
    <div
      className={`${styles["layout"]} ${className || ""} ${
        darkMode ? styles["dark-theme"] : styles["light-theme"]
      }`}
    >
      {children}
    </div>
  );

  // return darkMode ? (
  //   <div className={`${styles["layout__dark-theme"]} ${className || ""}`}>
  //     {children}
  //   </div>
  // ) : (
  //   <div className={`${styles["layout__light-theme"]} ${className || ""}`}>
  //     {children}
  //   </div>
  // );
};

export { Layout };
