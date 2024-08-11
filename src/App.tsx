import React from 'react';

import Container from './components/Container/Container';
import GradesChart from './components/GradesChart';
import Nav from './components/Nav';
import SendTable from './components/SendTable';
import { Send } from './types/Send';

function App() {
  const [sendData, setSendData] = React.useState<Send[]>([]);

  React.useEffect(() => {
    async function fetchSends() {
      try {
        const data = await fetch('sends.json');
        const json = await data.json();
        setSendData(json);
      } catch (e) {
        console.error(e);
      }
    }

    fetchSends();
  }, []);

  return (
    <>
      <Nav />
      <Container>
        <GradesChart sendData={sendData} />
        <SendTable sendData={sendData} />
      </Container>
    </>
  );
}

export default App;
