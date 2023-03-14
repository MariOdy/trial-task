import React from "react";
import Total from "../Total";
import getTransactions from "./getTransactions";
import styles from "./styles.module.scss";
interface Transaction {
  id: string;
  date: string;
  amount: string;
  currency: string;
  category: string;
  creditorName: string;
}

const Dashboard = async () => {
  const { transactions } = await getTransactions();
  return (
    <div className={styles.dashboard_wrapper}>
      <h1>Dashboard</h1>
      <div className={styles.dashboard_totals}>
        <Total label="Income" arrowDirection="down" />
        <Total label="Outcome" arrowDirection="up" />
      </div>
    </div>
  );
};

export default Dashboard;
