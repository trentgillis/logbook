import styles from './SendRow.module.css';

import { Send } from '@/types/Send';

type SendRowProps = {
  send: Send;
};

function SendRow({ send }: SendRowProps) {
  return (
    <tr className={styles.row}>
      <td>{send.name}</td>
      <td>V{send.grade}</td>
    </tr>
  );
}

export default SendRow;
