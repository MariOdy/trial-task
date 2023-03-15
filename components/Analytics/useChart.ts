import { useMemo, useState } from "react";
import type { ITransaction } from "@/utils/getTransactions";

function getMonthName(monthNo: number) {
  const date = new Date();
  date.setMonth(monthNo - 1);
  return date.toLocaleString("en-US", { month: "short" });
}

export interface MonthData {
  month: number;
  name: string;
  Income: number;
  Outcome: number;
}

const useChart = (transactions: ITransaction[]) => {
  const [year, setYear] = useState<number>(2018);

  const chartData: MonthData[] = useMemo(() => {
    const months: MonthData[] = new Array(12).fill(null).map((_, i) => ({
      month: i + 1,
      name: getMonthName(i + 1),
      Income: 0,
      Outcome: 0,
    }));

    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);

      if (date.getFullYear() !== year) return;

      const amount = Number(transaction.amount);
      const month = date.getMonth();

      if (amount > 0) {
        months[month].Income += amount;
      } else {
        months[month].Outcome += Math.abs(amount);
      }
    });

    return months;
  }, [transactions, year]);

  return { chartData, year, setYear };
};

export default useChart;
