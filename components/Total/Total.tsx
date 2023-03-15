import formattedAmount from "@/utils/formattedAmount";
import React from "react";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";

import styles from "./styles.module.scss";

interface TotalProps {
  label: "Income" | "Outcome";
  arrowDirection: "up" | "down";
  amount: number;
}

const Total: React.FC<TotalProps> = ({ label, arrowDirection, amount }) => {
  const totalAmount = formattedAmount(amount);

  return (
    <div className={`container ${styles.total_wrapper}`}>
      <div className={styles.arrow} data-direction={arrowDirection}>
        {arrowDirection === "up" ? <ImArrowUpRight2 /> : <ImArrowDownLeft2 />}
      </div>
      <div className={styles.total_data}>
        <p>Total {label}</p>
        <h3>{totalAmount}</h3>
      </div>
      <div className={styles.percentage} data-direction={arrowDirection}>
        +1.29%
      </div>
    </div>
  );
};

export default Total;
