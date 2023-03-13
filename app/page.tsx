import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

import styles from "./styles.module.scss";
import "@/styles/reset.css";
import "@/styles/styles.css";
import "@/styles/colors.css";

const Home = () => {
  return (
    <main className={styles.main_page}>
      <Sidebar />
      <Dashboard />
    </main>
  );
};
export default Home;
