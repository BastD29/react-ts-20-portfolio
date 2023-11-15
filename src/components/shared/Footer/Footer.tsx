import { FC, ReactNode } from "react";

import styles from "./Footer.module.scss";

interface FooterProps {
  children: ReactNode;
  className?: string;
}

const Footer: FC<FooterProps> = ({ children, className }) => {
  return (
    <footer className={`${styles["footer"]} ${className || ""}`}>
      {children}
    </footer>
  );
};

export { Footer };
