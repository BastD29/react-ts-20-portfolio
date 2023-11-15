import { FC } from "react";

import { navLinks } from "../../../constants/links";

import { Navbar } from "../Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import { Icon } from "../Icon/Icon";
import { Button } from "../Button/Button";

import { CloseIcon } from "../../../assets/icons/CloseIcon/CloseIcon";

import { useSelector } from "react-redux";
import { themeSelectors } from "../../../store/theme";

import styles from "./MobileMenu2.module.scss";

type MobileMenuProps = {
  isMenuOpen: boolean;
  className?: string;
  icon: React.ReactElement;
};

const handleSearch = (query: string) => {
  console.log(`Search for: ${query}`);
};

const handleToggleMobileMenu = () => {
  console.log("toggle mobile menu");
};

const MobileMenu2: FC<MobileMenuProps> = ({ isMenuOpen, className, icon }) => {
  if (!isMenuOpen) return null;

  // const darkMode = useSelector(themeSelectors.getTheme);

  return (
    <div className={`${styles["mobile-menu"]} ${className || ""}`}>
      <div className={styles["mobile-menu__header"]}>
        {icon && <Icon icon={icon} />}
        <Button
          className={styles["mobile-menu__button"]}
          onClick={handleToggleMobileMenu}
          type="button"
          icon={<CloseIcon color="#000000" width={20} height={20} />}
        />
      </div>
      <SearchBar
        onSearch={handleSearch}
        className={styles["mobile-menu__searchbar"]}
      />
      <Navbar
        links={navLinks}
        className={styles["mobile-menu__navbar"]}
        // className={`${styles["mobile-menu__navbar"]} ${
        //   darkMode
        //     ? styles["mobile-menu__navbar--dark"]
        //     : styles["mobile-menu__navbar--light"]
        // }`}
      />
    </div>
  );
};

export { MobileMenu2 };
