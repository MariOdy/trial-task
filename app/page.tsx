import Analytics from "@/components/Analytics";
import Total from "@/components/Total";
import Transaction from "@/components/Transaction";
import getTransactions from "@/utils/getTransactions";
import React from "react";

import styles from "./styles.module.scss";

const Home = async () => {
  const { transactions } = await getTransactions();
  if (!transactions) return null;

  const totalIncome = transactions.reduce(
    (acc, t) => acc + Math.max(0, Number(t.amount)),
    0
  );
  const totalOutcome = Math.abs(
    transactions.reduce((acc, t) => acc + Math.min(0, Number(t.amount)), 0)
  );

  return (
    <div className={styles.dashboard_wrapper}>
      <h1>Dashboard</h1>
      <div className={styles.dashboard_totals}>
        <Total label="Income" arrowDirection="down" amount={totalIncome} />
        <Total label="Outcome" arrowDirection="up" amount={totalOutcome} />
      </div>
      <div className={styles.transactionn_analytics}>
        <Transaction transactions={transactions} />
        <Analytics />
      </div>
    </div>
  );
};
export default Home;
