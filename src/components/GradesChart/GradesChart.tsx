import styles from './GradesChart.module.css';

import { Bar, BarChart, Rectangle, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

import { Send } from '@/types/Send';

import GradesChartTooltip from './GradesChartTooltip';

type GradesChartProps = {
  sendData: Send[];
};

function getSendChartData(sendData: Send[]) {
  if (!sendData.length) {
    return [];
  }

  const maxGrade = Math.max(...sendData.map((send) => send.grade));
  const gradeCounts = new Array(maxGrade).fill(0);

  for (const send of sendData) {
    gradeCounts[send.grade - 1] += 1;
  }

  return gradeCounts.map((gradeCount, index) => ({
    name: `V${index + 1}`,
    numberOfSends: gradeCount,
  }));
}

function GradesChart({ sendData }: GradesChartProps) {
  const sendChartData = getSendChartData(sendData);

  if (!sendData.length) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.totalWrapper}>
        <span className={styles.totalLabel}>Total:</span>
        {sendData.length} sends
      </div>
      <ResponsiveContainer width="100%" height={184}>
        <BarChart data={sendChartData}>
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
