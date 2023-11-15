import { FC, ReactNode } from "react";

import styles from "./Layout.module.scss";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout: FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={`${styles["layout"]} ${className || ""} `}>{children}</div>
  );
};

export { Layout };
