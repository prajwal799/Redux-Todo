import {useDispatch} from "react-redux"
import { v4 as uuid } from "uuid";
import {
  addTodosFailure,
  addTodosRequest,
  addTodosSuccess
} from "../Redux/app/action";
import { addTodos, getTodos } from "./api";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();
  // 1. write a getTodos function, once you are done with adding, invoke getTodos
  // 2.separate into a separate file
  const handleAdd = (text) => {
    console.log(text,"text")
    dispatch(addTodos(text)).then((res) => {
      console.log(res,"res231")
      dispatch(getTodos());
    });
  };

  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </div>
  );
}

export default Todo;