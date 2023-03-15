"use client";

import { useMemo, useState } from "react";
import { isBefore, isAfter } from "date-fns";
import { DateRange } from "rsuite/DateRangePicker";
import type { ITransaction } from "@/utils/getTransactions";

const useTransactions = (transactions: ITransaction[]) => {
  const [search, setSearch] = useState("");

  const [range, setRange] = useState<DateRange | null>(null);

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

  return { search, setSearch, range, setRange, filteredTransactions };
};

export default useTransactions;
