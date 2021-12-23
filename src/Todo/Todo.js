import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem";
import "./module.css"
import { useSelector , useDispatch } from "react-redux";
import { Navigate } from "react-router";
import {signOut} from "../Redux/auth/action";
const Todo = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();
    const handleSignOut = () => {
        dispatch(signOut(false))
    }

    return isLogin ? (
        <div className="todo">
            <button onClick={handleSignOut}>Sign out</button>
            <TodoInput />
            <TodoItem />
        </div>
    ) : <Navigate to="/"></Navigate>
}
export default Todo;