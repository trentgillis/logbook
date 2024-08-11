import styles from './GradesChartTooltip.module.css';

type GradesChartTooltipProps = {
  active?: boolean;
  payload?: any;
  label?: any;
};

function GradesChartTooltip({ active, payload, label }: GradesChartTooltipProps) {
  console.log(payload);

  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.tooltipLabel}>{label}</span>-
      <span className={styles.tooltipValue}>{payload[0].value} sends</span>
    </div>
  );
}

export default GradesChartTooltip;
