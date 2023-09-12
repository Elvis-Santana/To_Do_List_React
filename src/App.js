import Header from './Components/header'
import Container from './Components/Container';
import { Route,Routes } from 'react-router-dom';
import Tasks from './Components/Tasks';
import Box from './Components/Box';




function App() {

  return (
    <>
    {/* <Header/> */}

    <Box>

      <Container title={"Não Feitas"} />
      <Container title={"Em Andamento"} />
      <Container  title={"Concluídas"}/>

    </Box>
      
    </>
  );
}

export default App;
