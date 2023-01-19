import './App.css';
import Input from './components/Input/Input.js'
import List from './components/List/List';
import { useState } from 'react';



function App() {

  const [todo, setTodo] = useState([]);


  const onNewTodo = (value)=>{
    setTodo([...todo, {
      text: value,
      id: new Date().getTime()
    }])
  }

  const onDelete = (index)=>{
    let valueDelete = [...todo];
    valueDelete.splice(index, 1);
    setTodo(valueDelete);
  }

  return (
    <section>
   <h1>Lista de tarefas</h1>
   <Input value={todo} onNewTodo={onNewTodo}/>
   <List value={todo} onDelete={onDelete}/>
   </section>
  );
}

export default App;
