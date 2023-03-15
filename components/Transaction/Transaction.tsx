"use client";

import React, { useCallback, useMemo, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import formattedAmount from "@/utils/formattedAmount";
import { ITransaction } from "@/utils/getTransactions";
import { DateRangePicker } from "rsuite";
import { DateRange } from "rsuite/DateRangePicker";
import { format, isBefore, isAfter } from "date-fns";

import styles from "./styles.module.scss";

interface TransactionProps {
  transactions: ITransaction[];
}

const Transaction: React.FC<TransactionProps> = ({ transactions }) => {
  const [search, setSearch] = useState("");

  const [range, setRange] = useState<DateRange | null>(null);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => setSearch(e.target.value), []);

  const filteredTransactions = useMemo(() => {
    let res = transactions;

    if (search) {
      const reg = new RegExp(search, "i");
      res = res.filter(
        (transaction) =>
          reg.test(transaction.creditorName) ||
          reg.test(transaction.amount) ||
          reg.test(transaction.date)
      );
    }

    if (range) {
      const [from, to] = range;
      res = res.filter(
        (transaction) =>
          isAfter(new Date(transaction.date), from) &&
          isBefore(new Date(transaction.date), to)
      );
    }

    return res;
  }, [transactions, search, range]);

  return (
    <div className={`container ${styles.transaction_wrapper}`}>
      <div className={styles.transactions_header}>
        <h2>Transaction</h2>
        <label>
          <input
            type="search"
            value={search}
            onChange={onChangeHandler}
            placeholder="Search for anything..."
          />
          <AiOutlineSearch />
        </label>

        <DateRangePicker
          value={range}
          onChange={setRange}
          placeholder="Pick a date range"
          renderValue={([from, to]) => (
            <>
              {format(from, "dd MMM")} - {format(to, "dd MMM")}
            </>
          )}
          size="lg"
        />
      </div>
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
          {filteredTransactions.map(({ id, creditorName, date, amount }) => (
            <tr key={id}>
              <td>{creditorName}</td>
              <td>{date}</td>
              <td>{formattedAmount(Number(amount))}</td>
              <td className={styles.status}>Deposited</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
