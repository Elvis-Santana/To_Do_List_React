import Container from './Components/Container';
import Box from './Components/Box';
import Edit from './Components/Edit';
import { useState } from 'react';




function App() {
  const [edit,setEdit] =useState(false)

 const isEdit = (e)=>{
    console.log(e.target.parentNode.parentNode)
    setEdit(true)
 }

 const felharEditor =()=>{
  setEdit(false)

 }

  return (
    <>

    <Box>

      <Container title={"Não Feitas"} edit={isEdit}  initStatus={1}/>
      <Container title={"Em Andamento"} edit={isEdit} initStatus={2}/>
      <Container  title={"Concluídas"} edit={isEdit}  initStatus={3}/>

      {
        edit
        ? <Edit felhar={felharEditor}/>
        : null
      }

    </Box>
    </>
  );
}

export default App;
