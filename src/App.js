import Container from './Components/Container';
import Box from './Components/Box';
import Edit from './Components/Edit';
import { useState } from 'react';




function App() {
  const [edit,setEdit] =useState(false)

  const [text,setText] = useState('');
  const [idEdit,setIdEdit] = useState('');

 const isEdit = (e)=>{
  const taskEdit =e.target.parentNode.parentNode;
    console.log(taskEdit);
    const id = taskEdit.querySelector('._id');
    const textContent = taskEdit.querySelector('p');
    setIdEdit(id);
    setText(textContent.textContent)
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
        ? <Edit 
          felhar={felharEditor}
          text={text}
        />
        : null
      }

    </Box>
    </>
  );
}

export default App;
