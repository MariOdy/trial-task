import React from "react";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";
import { formattedAmount } from "@/utils/utils";

import styles from "./styles.module.scss";

interface StatsProps {
  type: "Income" | "Outcome";
  amount: number;
}

const Stats: React.FC<StatsProps> = ({ type, amount }) => {
  const totalAmount = formattedAmount(amount);

  return (
    <div className={`container ${styles.total_wrapper}`} data-type={type}>
      <div className={styles.arrow}>
        {type === "Income" ? <ImArrowDownLeft2 /> : <ImArrowUpRight2 />}
      </div>
      <div className={styles.total_data}>
        <p>Total {type}</p>
        <h3>{totalAmount}</h3>
      </div>
      <div className={styles.percentage}>+1.29%</div>
    </div>
  );
};

export default Stats;
