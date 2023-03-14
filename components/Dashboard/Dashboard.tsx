import React from "react";
import Total from "../Total";
import Transaction from "../Transaction";
import styles from "./styles.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard_wrapper}>
      <h1>Dashboard</h1>
      <div className={styles.dashboard_totals}>
        <Total label="Income" arrowDirection="down" />
        <Total label="Outcome" arrowDirection="up" />
      </div>
      <div className={styles.transactionn_analytics}>
        {/* @ts-expect-error Server Component */}
        <Transaction />
      </div>
    </div>
  );
};

export default Dashboard;
