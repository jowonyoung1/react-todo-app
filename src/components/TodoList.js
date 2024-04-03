import TodoListItem from "./TodoListItem";
import "../styles/TodoList.scss";

const Todolist = () => {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default Todolist;
