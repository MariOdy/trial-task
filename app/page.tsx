import React from "react";
import Total from "@/components/Total";
import Analytics from "@/components/Analytics";
import Transactions from "@/components/Transactions";
import getTransactions from "@/utils/getTransactions";

import styles from "./styles.module.scss";

const Home = async () => {
  const { transactions } = await getTransactions();

  if (!transactions) return null;

  return (
    <div className={styles.dashboard_wrapper}>
      <h1 className={styles.title}>Dashboard</h1>
      <Total transactions={transactions} />
      <div className={styles.cards}>
        <Transactions transactions={transactions} />
        <Analytics transactions={transactions} />
      </div>
    </div>
  );
};

export default Home;
