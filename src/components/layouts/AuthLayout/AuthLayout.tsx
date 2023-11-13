import { Header } from "../../shared/Header/Header";
import { Layout } from "../Layout/Layout";
import { SvgIcon } from "../../../assets/icons/SvgIcon/SvgIcon";

import { useSelector } from "react-redux";
import { themeSelectors } from "../../../store/theme";

import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  const darkMode = useSelector(themeSelectors.getTheme);

  return (
    <Layout className={`${styles["auth-layout"]} `}>
      {/* <h1>Auth layout</h1> */}
      <Header
        className={`${styles["auth-layout__header"]} ${
          darkMode
            ? styles["auth-layout__header--dark"]
            : styles["auth-layout__header--light"]
        }`}
        icon={<SvgIcon color1="#000000" color2="#FFFFFF" width={40} />}
      />
    </Layout>
  );
};

export { AuthLayout };
