import styles from './SendTypeBadge.module.css';

import * as Tooltip from '@radix-ui/react-tooltip';
import { CircleCheckBig, Gem, Zap } from 'lucide-react';

import { SendType } from '@/types/Send';

type SendTypeBadgeProps = {
  type?: SendType;
};

function getSendTypeIcon(type: SendType) {
  switch (type) {
    case 'redpoint':
      return CircleCheckBig;
    case 'flash':
      return Zap;
    case 'fotg':
      return Gem;
    default:
      return CircleCheckBig;
  }
}

function getSendTypeTooltipText(type: SendType) {
  if (type === 'fotg') {
    return 'First of the grade';
  }

  return type.charAt(0).toUpperCase() + type.slice(1);
}

function SendTypeBadge({ type = 'redpoint' }: SendTypeBadgeProps) {
  const Icon = getSendTypeIcon(type);

  return (
    <Tooltip.Provider skipDelayDuration={0}>
      <Tooltip.Root delayDuration={300}>
        <Tooltip.Trigger asChild>
          <div className={styles.badge}>
            <Icon className={`${styles.icon} ${styles[type]}`} />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.tooltipContent} side="top" sideOffset={6}>
            {getSendTypeTooltipText(type)}
            <Tooltip.Arrow className={styles.tooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default SendTypeBadge;
