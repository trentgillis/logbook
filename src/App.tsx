import Container from './components/Container/Container';
import Nav from './components/Nav';
import SendTable from './components/SendTable';

function App() {
  return (
    <>
      <Nav />
      <Container>
        <SendTable />
      </Container>
    </>
  );
}

export default App;
