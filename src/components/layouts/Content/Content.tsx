import { FC, ReactNode } from "react";
import styles from "./Content.module.scss";

type ContentProps = {
  children: ReactNode;
  className?: string;
};

const Content: FC<ContentProps> = ({ children, className }) => {
  return (
    <main className={`${styles["content"]} ${className || ""}`}>
      {children}
    </main>
  );
};

export { Content };
