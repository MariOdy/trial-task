"use client";

import React from "react";
import type { ITransaction } from "@/utils/getTransactions";
import useChart from "./useChart";

import Chart from "./Chart";
import Legend from "./Legend";
import YearSelect from "./YearSelect";

import styles from "./styles.module.scss";

interface AnalyticsProps {
  transactions: ITransaction[];
}

const Analytics: React.FC<AnalyticsProps> = ({ transactions }) => {
  const { chartData, year, setYear } = useChart(transactions);

  return (
    <div className={`container ${styles.analytics_wrapper}`}>
      <div className={styles.analytics_header}>
        <h2>Analytics</h2>
        <Legend />
        <YearSelect year={year} setYear={setYear} />
      </div>

      <Chart data={chartData} />
    </div>
  );
};

export default Analytics;
