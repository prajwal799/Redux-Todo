import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem";
import "./module.css"

const Todo = () => {
    return(
        <div className="todo">
            <TodoInput />
            <TodoItem />
        </div>
    )
}
export default Todo;