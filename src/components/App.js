
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


  const setTodosHandler = (todoss) => {
    setTodos((todos) => [...todos, todoss])
  }

  useEffect(() => {
    getTodosHandler();
  }, [])

  return (
    <div >

      <WebNavbar />
      <AddTodo todos={todos} setTodosHandler={setTodosHandler} />
      <TodoLists todos={todos} setTodosHandler={setTodosHandler} />
    </div>
  );
}

export default App;
