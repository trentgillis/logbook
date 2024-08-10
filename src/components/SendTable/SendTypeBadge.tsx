import styles from './SendTypeBadge.module.css';

import { Check, CircleCheckBig, Dot, ThumbsUp, Zap } from 'lucide-react';

type SendTypeBadgeProps = {
  flash?: boolean;
};

function SendTypeBadge({ flash }: SendTypeBadgeProps) {
  return (
    <div className={styles.wrapper}>
      {flash ? (
        <Zap className={styles.flashIcon} strokeWidth={2} />
      ) : (
        <CircleCheckBig className={styles.redpointIcon} strokeWidth={2} />
      )}
    </div>
  );
}

export default SendTypeBadge;
