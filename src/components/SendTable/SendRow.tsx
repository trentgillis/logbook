import styles from './SendRow.module.css';

import { Send } from '@/types/Send';

type SendRowProps = {
  send: Send;
};

function SendRow({ send }: SendRowProps) {
  return (
    <tr className={styles.row}>
      <td>
        <div className={styles.name}>{send.name}</div>
        <div className={styles.location}>
          {send.area}, {send.state}
        </div>
      </td>
      <td>V{send.grade}</td>
      <td>{new Date(send.date).toLocaleDateString('en-us', { month: 'short', year: 'numeric' })}</td>
    </tr>
  );
}

export default SendRow;
