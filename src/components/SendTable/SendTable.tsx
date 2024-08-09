import styles from './SendTable.module.css';

import React from 'react';

import { Send } from '@/types/Send';
import SendTableHeader from './SendTableHeader';
import SendRow from './SendRow';

function SendTable() {
  const [sends, setSends] = React.useState<Send[]>([]);

  React.useEffect(() => {
    async function fetchSends() {
      try {
        const data = await fetch('sends.json');
        const json = await data.json();
        setSends(json);
      } catch (e) {
        console.error(e);
      }
    }

    fetchSends();
  }, []);

  return (
    <table className={styles.table}>
      <SendTableHeader />
      <tbody>
        {sends.map((send) => (
          <SendRow key={send.id} send={send} />
        ))}
      </tbody>
    </table>
  );
}

export default SendTable;
