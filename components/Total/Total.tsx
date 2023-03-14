import React from "react";
import Image from "next/image";
import { ImArrowDownLeft2, ImArrowUpRight2 } from "react-icons/im";

import styles from "./styles.module.scss";

interface TotalProps {
  label: "Income" | "Outcome";
  arrowDirection: "up" | "down";
}
const Total: React.FC<TotalProps> = ({ label, arrowDirection }) => {
  return (
    <div className={`container ${styles.total_wrapper}`}>
      <div className={styles.arrow} data-direction={arrowDirection}>
        {arrowDirection === "up" ? <ImArrowUpRight2 /> : <ImArrowDownLeft2 />}
      </div>
      <div className={styles.total_data}>
        <p>Total {label}</p>
        <h3>$632.000</h3>
      </div>
      <div className={styles.percentage} data-direction={arrowDirection}>
        +1.29%
      </div>
    </div>
  );
};

export default Total;
