import Sidebar from "@/components/Sidebar";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.main_page}>
      <Sidebar />
    </main>
  );
}
