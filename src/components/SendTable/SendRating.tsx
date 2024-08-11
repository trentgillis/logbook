import { range } from '@/utils/utils';
import styles from './SendRating.module.css';

import { SendRating as SendRatingType } from '@/types/Send';
import { Star } from 'lucide-react';

type SendRatingProps = {
  rating: SendRatingType;
};

function SendRating({ rating }: SendRatingProps) {
  return (
    <div className={styles.wrapper}>
      {range(rating).map((num) => (
        <Star key={num} className={`${styles.starIcon}`} />
      ))}
    </div>
  );
}

export default SendRating;
