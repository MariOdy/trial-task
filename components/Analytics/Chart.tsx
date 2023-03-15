import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "rsuite/dist/rsuite.css";

import type { MonthData } from "./useChart";

interface ChartProps {
  data: MonthData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" maxHeight={412}>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Income" fill="#6359E9" />
        <Bar dataKey="Outcome" fill="#64CFF6" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
