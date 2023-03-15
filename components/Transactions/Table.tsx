import React from "react";
import { format } from "date-fns";
import type { ITransaction } from "@/utils/getTransactions";
import { formattedAmount } from "@/utils/utils";

import styles from "./styles.module.scss";

interface TableProps {
  transactions: ITransaction[];
}

const Table: React.FC<TableProps> = ({ transactions }) => {
  if (!Array.isArray(transactions) || transactions.length === 0) return null;

  return (
    <table className={styles.transactions_table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, creditorName, date, amount }) => (
          <tr key={id}>
            <td>{creditorName}</td>
            <td>{format(new Date(date), "eee, dd MMM yyy")}</td>
            <td>{formattedAmount(Number(amount))}</td>
            <td className={styles.status}>Deposited</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
