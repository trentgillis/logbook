import styles from './SendTable.module.css';

import { Send } from '@/types/Send';
import SendTableHeader from './SendTableHeader';
import SendRow from './SendRow';

type SendTableProps = {
  sendData: Send[];
};

function SendTable({ sendData }: SendTableProps) {
  if (!sendData.length) {
    return null;
  }

  return (
    <table className={styles.table}>
      <SendTableHeader />
      <tbody>
        {sendData.sort((s1, s2) => s2.date - s1.date).map((send) => (
          <SendRow key={send.id} send={send} />
        ))}
      </tbody>
    </table>
  );
}

export default SendTable;
