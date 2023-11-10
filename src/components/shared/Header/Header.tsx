import { FC } from "react";

import { Navbar } from "../Navbar/Navbar";
import { Icon } from "../Icon/Icon";
import { SearchBar } from "../SearchBar/SearchBar";

import { authLinks, navLinks } from "../../../constants/links";

import styles from "./Header.module.scss";
import { SwitchButton } from "../SwitchButton/SwitchButton";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../../store/configureStore";
import { themeActions, themeSelectors } from "../../../store/theme";

type HeaderProps = {
  className?: string;
  icon: React.ReactElement;
};

const handleSearch = (query: string) => {
  console.log(`Search for: ${query}`);
  // Here you would typically handle the search logic, like setting state, making an API call, etc.
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
      <Navbar links={navLinks} />
      <SearchBar onSearch={handleSearch} />
      <Navbar links={authLinks} />
      {/* <SwitchButton isChecked={false} onChange={handleTheme} /> */}
      <button onClick={handleToggle}>
        {darkMode ? "Switch to light mode" : "Switch to dark mode"}
      </button>
    </header>
  );
};

export { Header };
