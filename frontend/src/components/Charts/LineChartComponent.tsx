import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  date: string;
  value: number;
}

interface LineChartComponentProps {
  data: DataPoint[];
  dataKey: string;
  lineName: string;
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data, dataKey, lineName }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey={dataKey} name={lineName} stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
