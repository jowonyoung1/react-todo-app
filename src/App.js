import TodoInsert from "./components/ToDoinsert";
import Todolist from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <Todolist />
    </TodoTemplate>
  );
}

export default App;
