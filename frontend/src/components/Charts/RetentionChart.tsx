import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  date: string;
  retentionRate: number;
}

interface RetentionChartProps {
  data: DataPoint[];
}

const RetentionChart: React.FC<RetentionChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="retentionRate" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);

export default RetentionChart;
