import Container from './components/Container/Container';
import GradesChart from './components/GradesChart';
import Nav from './components/Nav';
import SendTable from './components/SendTable';

function App() {
  return (
    <>
      <Nav />
      <Container>
        <GradesChart />
        <SendTable />
      </Container>
    </>
  );
}

export default App;
