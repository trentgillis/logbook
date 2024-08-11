import styles from './SendTable.module.css';

import { Send } from '@/types/Send';
import SendTableHeader from './SendTableHeader';
import SendRow from './SendRow';

type SendTableProps = {
  sendData: Send[];
};

function SendTable({ sendData }: SendTableProps) {
  return (
    <table className={styles.table}>
      <SendTableHeader />
      <tbody>
        {sendData.map((send) => (
          <SendRow key={send.id} send={send} />
        ))}
      </tbody>
    </table>
  );
}

export default SendTable;
