"use client";

import React from "react";
import type { ITransaction } from "@/utils/getTransactions";

import useTransactions from "./useTransactions";
import RangePicker from "./RangePicker";
import Search from "./Search";
import Table from "./Table";

import styles from "./styles.module.scss";

interface TransactionsProps {
  transactions: ITransaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  const { search, setSearch, range, setRange, filteredTransactions } =
    useTransactions(transactions);

  return (
    <div className={`container ${styles.transaction_wrapper}`}>
      <div className={styles.transactions_header}>
        <h2>Transactions</h2>
        <Search search={search} setSearch={setSearch} />
        <RangePicker range={range} setRange={setRange} />
      </div>

      <div>
        <Table transactions={filteredTransactions} />
      </div>
    </div>
  );
};

export default Transactions;
