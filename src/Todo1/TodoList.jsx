import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
  removeTodo,
  toggleTodo
} from "../Redux/app/action";
import { getTodos } from "./api";

function TodoItem({ title, status, onDelete, id, onToggle }) {
  return (
    <div style={{display:"flex",gap:"1rem",marginLeft:"34%",marginTop:"20px"}}>
       <div>{title}</div> <div>
          {status ? "True" : "False"}  </div> 
         
      <button onClick={() => onDelete(id)}>Delete</button>
      <button onClick={() => onToggle(id)}>Toggle Status</button>
    </div>
  );
}

function TodoList() {
  const { todos, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // getTodos(dispatch);
    dispatch(getTodos());
  }, []);

  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };

  const handleToggle = (id) => {
    console.log(id,"id")
    const action = toggleTodo(id);
    dispatch(action);
  };
  console.log(todos);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3> Something went wrong!</h3>}
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default TodoList;
