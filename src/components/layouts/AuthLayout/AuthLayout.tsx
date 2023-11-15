import { Header } from "../../shared/Header/Header";
import { Layout } from "../Layout/Layout";
import { SvgIcon } from "../../../assets/icons/SvgIcon/SvgIcon";
import { Content } from "../Content/Content";
import { Footer } from "../../shared/Footer/Footer";

import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../../store/theme";

import i18n from "../../../i18n/i18n";

import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  const darkMode = useSelector(themeSelectors.getTheme);
  const currentYear = new Date().getFullYear();

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
      <Content
        className={`${styles["auth-layout__content"]} ${
          darkMode
            ? styles["auth-layout__content--dark"]
            : styles["auth-layout__content--light"]
        }`}
      >
        <Outlet />
      </Content>
      <Footer
        className={`${styles["auth-layout__footer"]} ${
          darkMode
            ? styles["auth-layout__footer--dark"]
            : styles["auth-layout__footer--light"]
        }`}
      >
        {i18n.t("footer.message", { year: currentYear }) as string}
      </Footer>
    </Layout>
  );
};

export { AuthLayout };
