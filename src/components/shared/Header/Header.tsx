import { FC, useState } from "react";

import { Navbar } from "../Navbar/Navbar";
import { Icon } from "../Icon/Icon";
import { SearchBar } from "../SearchBar/SearchBar";
import { Button } from "../Button/Button";
import { MobileMenu } from "../MobileMenu/MobileMenu";

import { authLinks, navLinks } from "../../../constants/links";
import { useDispatch, useSelector } from "react-redux";
import { themeActions, themeSelectors } from "../../../store/theme";

import { SunIcon } from "../../../assets/icons/SunIcon/SunIcon";
import { MoonIcon } from "../../../assets/icons/MoonIcon/MoonIcon";
import { BurgerIcon } from "../../../assets/icons/BurgerIcon/BurgerIcon";

import styles from "./Header.module.scss";
import { SvgIcon } from "../../../assets/icons/SvgIcon/SvgIcon";

type HeaderProps = {
  className?: string;
  icon: React.ReactElement;
};

const handleSearch = (query: string) => {
  console.log(`Search for: ${query}`);
};

const Header: FC<HeaderProps> = ({ className, icon }) => {
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const darkMode = useSelector(themeSelectors.getTheme);

  const iconColor = darkMode ? "#FFFFFF" : "#000000";

  const darkModeIcon = darkMode ? (
    <SunIcon color="#FFFFFF" width={20} height={20} />
  ) : (
    <MoonIcon color="#000000" width={20} height={20} />
  );

  const handleToggleDarkTheme = () => {
    dispatch(themeActions.toggleTheme());
  };

  const handleToggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles["header"]} ${className || ""}`}>
      <div className={styles["header__left"]}>
        <Button
          className={`${styles["header__button"]} ${styles["mobile-menu-btn"]}`}
          onClick={handleToggleMobileMenu}
          type="button"
          icon={<BurgerIcon color={iconColor} width={20} height={20} />}
        />
        {icon && <Icon icon={icon} />}
      </div>

      <MobileMenu
        icon={<SvgIcon color1="#000000" color2="#FFFFFF" width={40} />}
        isMenuOpen={isMenuOpen}
        toggleMenu={handleToggleMobileMenu}
        className={`${styles["header__mobile-menu"]} ${
          darkMode
            ? styles["header__mobile-menu--dark"]
            : styles["header__mobile-menu--light"]
        }`}
      />

      <Navbar
        links={navLinks}
        className={`${styles["header__navbar"]} ${
          darkMode
            ? styles["header__navbar--dark"]
            : styles["header__navbar--light"]
        } ${styles["navlinks"]}`}
      />
      <SearchBar
        onSearch={handleSearch}
        className={styles["header__searchbar"]}
      />
      <Navbar
        links={authLinks}
        className={`${styles["header__navbar"]} ${
          darkMode
            ? styles["header__navbar--dark"]
            : styles["header__navbar--light"]
        } ${styles["authlinks"]}`}
      />

      <Button
        className={`${styles["header__button"]} ${styles["darkmode-btn"]}`}
        onClick={handleToggleDarkTheme}
        type="button"
        icon={darkModeIcon}
      />
    </header>
  );
};

export { Header };
