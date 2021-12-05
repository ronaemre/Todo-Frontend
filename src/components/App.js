
import './App.css';
import TodoLists from './TodoLists/TodoLists';
import WebNavbar from './WebNavbar';
import AddTodo from './AddTodo';
import { useState, useEffect } from "react";
import { getTodo } from '../api/TodoApı';




function App() {
  const [todos, setTodos] = useState([]);


  const getTodosHandler = async () => {
    const response = await getTodo();
    setTodos(response.data)

  }


  const AddTodosHandler = (todoss) => {
    setTodos((todos) => [...todos, todoss])
  }

  const DeleteTodosHandlerr = (id) => {
    setTodos([...todos].filter((item) => item.id !== id));
  }



  useEffect(() => {
    getTodosHandler();
  }, [])

  return (
    <div >

      <WebNavbar />
      <AddTodo todos={todos} setTodosHandler={AddTodosHandler} />
      <TodoLists todos={todos} setTodosHandler={DeleteTodosHandlerr} />
    </div>
  );
}

export default App;
