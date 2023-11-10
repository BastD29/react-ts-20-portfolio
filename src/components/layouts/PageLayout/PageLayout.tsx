import { Layout } from "../Layout/Layout";

import styles from "./PageLayout.module.scss";

const PageLayout = () => {
  return (
    <Layout className={styles["page-layout"]}>
      <h1>Page layout</h1>
    </Layout>
  );
};

export { PageLayout };
