import { SendType } from '@/types/Send';
import styles from './SendTypeBadge.module.css';

import { CircleCheckBig, Gem, Zap } from 'lucide-react';

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

function SendTypeBadge({ type = 'redpoint' }: SendTypeBadgeProps) {
  const Icon = getSendTypeIcon(type);

  return (
    <div className={styles.wrapper}>
      <Icon className={`${styles.icon} ${styles[type]}`} />
    </div>
  );
}

export default SendTypeBadge;
