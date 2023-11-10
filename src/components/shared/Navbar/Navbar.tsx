import { FC } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.scss";

type NavbarLink = {
  title: string;
  path: string;
};

type NavbarProps = {
  className?: string;
  links: NavbarLink[];
};

const Navbar: FC<NavbarProps> = ({ className, links }) => {
  return (
    <nav className={`${styles["navbar"]} ${className || ""}`}>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
