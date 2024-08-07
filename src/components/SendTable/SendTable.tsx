import React from 'react';

import { Send } from '@/types/Send';

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

  return sends.map((send) => <p>{send.name}</p>);
}

export default SendTable;
