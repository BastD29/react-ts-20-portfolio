import { FC } from "react";

import { Navbar } from "../Navbar/Navbar";
import { Icon } from "../Icon/Icon";
import { SearchBar } from "../SearchBar/SearchBar";
import { Button } from "../Button/Button";

import { authLinks, navLinks } from "../../../constants/links";
import { useDispatch, useSelector } from "react-redux";
import { themeActions, themeSelectors } from "../../../store/theme";

import { SunIcon } from "../../../assets/icons/SunIcon/SunIcon";
import { MoonIcon } from "../../../assets/icons/MoonIcon/MoonIcon";

import styles from "./Header.module.scss";

type HeaderProps = {
  className?: string;
  icon: React.ReactElement;
};

const handleSearch = (query: string) => {
  console.log(`Search for: ${query}`);
};

const Header: FC<HeaderProps> = ({ className, icon }) => {
  const dispatch = useDispatch();

  const darkMode = useSelector(themeSelectors.getTheme);
  console.log("darkMode:", darkMode);

  const handleToggle = () => {
    dispatch(themeActions.toggleTheme());
  };

  return (
    <header className={`${styles["header"]} ${className || ""}`}>
      {/* <h1>Header</h1> */}
      {icon && <Icon icon={icon} />}
      <Navbar
        links={navLinks}
        className={`${styles["header__navbar"]} ${
          darkMode
            ? styles["header__navbar--dark"]
            : styles["header__navbar--light"]
        }`}
      />
      <SearchBar onSearch={handleSearch} />
      <Navbar
        links={authLinks}
        className={`${styles["header__navbar"]} ${
          darkMode
            ? styles["header__navbar--dark"]
            : styles["header__navbar--light"]
        }`}
      />

      {darkMode ? (
        <Button
          // className={styles["header__dark-mode-btn"]}
          onClick={handleToggle}
          type="button"
          icon={<SunIcon color="#FFFFFF" width={20} height={20} />}
        />
      ) : (
        <Button
          // className={styles["header__dark-mode-btn"]}
          onClick={handleToggle}
          type="button"
          icon={<MoonIcon color="#000000" width={20} height={20} />}
        />
      )}
    </header>
  );
};

export { Header };
