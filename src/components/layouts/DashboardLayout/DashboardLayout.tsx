import { Header } from "../../shared/Header/Header";
import { Layout } from "../Layout/Layout";
import { SvgIcon } from "../../../assets/icons/SvgIcon/SvgIcon";

import styles from "./DashboardLayout.module.scss";
import { useSelector } from "react-redux";
import { themeSelectors } from "../../../store/theme";

const DashboardLayout = () => {
  const darkMode = useSelector(themeSelectors.getTheme);

  return (
    // <Layout className={styles["dashboard-layout"]}>
    <Layout
      className={`${styles["dashboard-layout"]} ${
        darkMode ? styles["dark-theme"] : styles["light-theme"]
      }`}
    >
      {/* <h1>Dashboard layout</h1> */}
      <Header
        className={styles["auth-layout__header"]}
        icon={<SvgIcon color1="#F2F2F2" color2="#000000" width={40} />}
      />
    </Layout>
  );
};

export { DashboardLayout };
