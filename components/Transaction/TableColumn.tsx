import React from "react";
import { ITransaction } from "./Transaction";

interface TableColumnProps {
  label: string;
  type: string;
  data: ITransaction[];
}

const TableColumn: React.FC<TableColumnProps> = ({ label, data }) => {
  return (
    <div>
      <h5>{label}</h5>
      <ul>
        {data.map((transaction) => {
          const { creditorName, date, amount, id } = transaction;
          return <li key={id}></li>;
        })}
      </ul>
    </div>
  );
};

export default TableColumn;
