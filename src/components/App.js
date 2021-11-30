
import './App.css';
import TodoLists from './TodoLists/TodLists';
import WebNavbar from './WebNavbar';
import AddTodo from './AddTodo';

function App() {
  return (
    <div >

      <WebNavbar />
      <AddTodo />
      <TodoLists />
    </div>
  );
}

export default App;
