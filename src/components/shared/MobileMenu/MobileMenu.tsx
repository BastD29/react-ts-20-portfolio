import { FC } from "react";

import { navLinks } from "../../../constants/links";

import { Navbar } from "../Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

import { CloseIcon } from "../../../assets/icons/CloseIcon/CloseIcon";

import styles from "./MobileMenu.module.scss";

type MobileMenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  icon: React.ReactElement;
  className?: string;
};

const handleSearch = (query: string) => {
  console.log(`Search for: ${query}`);
};

// const handleToggleMobileMenu = () => {
//   console.log("toggle mobile menu");
// };

const MobileMenu: FC<MobileMenuProps> = ({
  isMenuOpen,
  toggleMenu,
  className,
  icon,
}) => {
  if (!isMenuOpen) return null;

  return (
    <div className={`${styles["mobile-menu"]} ${className || ""}`}>
      <div className={styles["mobile-menu__header"]}>
        {icon && <Icon icon={icon} />}
        <Button
          className={styles["mobile-menu__button"]}
          onClick={toggleMenu}
          type="button"
          icon={<CloseIcon color="#000000" width={20} height={20} />}
        />
      </div>
      <SearchBar
        onSearch={handleSearch}
        className={styles["mobile-menu__searchbar"]}
      />
      <Navbar links={navLinks} className={styles["mobile-menu__navbar"]} />
    </div>
  );
};

export { MobileMenu };
