import { Header } from "../../shared/Header/Header";
import { Layout } from "../Layout/Layout";
import { SvgIcon } from "../../../assets/icons/SvgIcon/SvgIcon";

import styles from "./AuthLayout.module.scss";

const AuthLayout = () => {
  return (
    <Layout className={styles["auth-layout"]}>
      {/* <h1>Auth layout</h1> */}
      <Header
        className={styles["auth-layout__header"]}
        icon={<SvgIcon color1="#000000" color2="#FFFFFF" width={40} />}
      />
      {/* <Header
        className={styles["auth-layout__header"]}
        icon={<HouseIcon color="#00000" width={40} />}
      /> */}
    </Layout>
  );
};

export { AuthLayout };
