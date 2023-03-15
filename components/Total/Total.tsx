import React from "react";
import type { ITransaction } from "@/utils/getTransactions";
import { getTotal } from "./utils";
import Stats from "./Stats";

import styles from "./styles.module.scss";

interface TotalProps {
  transactions: ITransaction[];
}

const Total: React.FC<TotalProps> = ({ transactions }) => {
  const { income, outcome } = getTotal(transactions);

  return (
    <div className={styles.totals}>
      <Stats type="Income" amount={income} />
      <Stats type="Outcome" amount={outcome} />
    </div>
  );
};

export default Total;
