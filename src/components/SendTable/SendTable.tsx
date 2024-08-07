import styles from './SendTable.module.css';

import React from 'react';

import { Send } from '@/types/Send';
import SendTableHeader from './SendTableHeader';

function SendTable() {
  const [sends, setSends] = React.useState<Send[]>([]);

  React.useEffect(() => {
    async function fetchSends() {
      const data = await fetch('sends.json');
      const json = await data.json();

      setSends(json);
    }

    fetchSends();
  }, []);

  return (
    <table className={styles.table}>
      <SendTableHeader />
      <tbody>
        {sends.map((send) => {
          return (
            <tr key={send.id}>
              <td>{send.name}</td>
              <td>{send.grade}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SendTable;
