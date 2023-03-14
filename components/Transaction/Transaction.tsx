import React from "react";
import getTransactions from "../Dashboard/getTransactions";

import styles from "./styles.module.scss";
import TableColumn from "./TableColumn";

export interface ITransaction {
  id: string;
  date: string;
  amount: string;
  currency: string;
  category: string;
  creditorName: string;
}

const Transaction = async () => {
  const { transactions } = await getTransactions();
  if (!transactions) return null;

  return (
    <div className={`container ${styles.transaction_wrapper}`}>
      <header>
        <h2>Transaction</h2>
      </header>
      <table className={styles.transactions_table}>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {transactions.map((t: ITransaction) => {
          return (
            <tr key={t.id}>
              <td>{t.creditorName}</td>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td className={styles.status}>Deposited</td>
            </tr>
          );
        })}
      </table>

      {/* <TableColumn label="Name" type="creditorName" data={transactions} />
        <TableColumn label="Date" type="creditorName" data={transactions} />
        <TableColumn label="Amount" type="creditorName" data={transactions} />
        <TableColumn label="Status" type="creditorName" data={transactions} /> */}
    </div>
  );
};

export default Transaction;
