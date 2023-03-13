import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.main_page}>
      <Sidebar />
      <Dashboard />
    </main>
  );
};
export default Home;
