import styles from './SendRow.module.css';

import { Send } from '@/types/Send';
import SendTypeBadge from './SendTypeBadge';
import SendRating from './SendRating';

type SendRowProps = {
  send: Send;
};

function SendRow({ send }: SendRowProps) {
  return (
    <tr className={styles.row}>
      <td>
        <SendTypeBadge type={send.type} />
      </td>
      <td>
        <div className={styles.name}>{send.name}</div>
        <div className={styles.location}>
          {send.area}, {send.state}
        </div>
      </td>
      <td>V{send.grade}</td>
      <td>{new Date(send.date).toLocaleDateString('en-us', { month: 'short', year: 'numeric' })}</td>
      <td>
        <SendRating rating={send.rating} />
      </td>
    </tr>
  );
}

export default SendRow;
