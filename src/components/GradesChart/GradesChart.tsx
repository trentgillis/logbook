import { Bar, BarChart, Rectangle, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import styles from './GradesChart.module.css';
import React from 'react';
import GradesChartTooltip from './GradesChartTooltip';

const data = [
  {
    name: 'V1',
    numberOfSends: 1,
  },
  {
    name: 'V2',
    numberOfSends: 3,
  },
  {
    name: 'V3',
    numberOfSends: 0,
  },
  {
    name: 'V4',
    numberOfSends: 0,
  },
  {
    name: 'V5',
    numberOfSends: 5,
  },
  {
    name: 'V6',
    numberOfSends: 3,
  },
  {
    name: 'V7',
    numberOfSends: 12,
  },
  {
    name: 'V8',
    numberOfSends: 21,
  },
  {
    name: 'V9',
    numberOfSends: 11,
  },
  {
    name: 'V10',
    numberOfSends: 3,
  },
  {
    name: 'V11',
    numberOfSends: 8,
  },
  {
    name: 'V12',
    numberOfSends: 1,
  },
];

function GradesChart() {
  return (
    <div className={styles.wrapper}>
      <ResponsiveContainer width="100%" height={184}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={8}
            tick={{ fill: '#fff', height: 2, fontSize: 14 }}
          />
          <Tooltip cursor={false} content={<GradesChartTooltip />} />
          <Bar
            shape={<Rectangle radius={2} />}
            dataKey="numberOfSends"
            fill="#ffdd2a"
            activeBar={<Rectangle radius={2} fill="#f02260" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GradesChart;
