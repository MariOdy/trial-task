import type { ITransaction } from "@/utils/getTransactions";

export const getTotal = (transactions: ITransaction[]) => {
  let income = 0;
  let outcome = 0;

  transactions.forEach((transaction) => {
    const amount = Number(transaction.amount);
    if (amount > 0) {
      income += amount;
    } else {
      outcome -= amount;
    }
  });

  return { income, outcome };
};
