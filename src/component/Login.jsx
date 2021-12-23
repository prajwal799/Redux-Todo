import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginToken } from "../Redux/auth/action";
import { Navigate } from "react-router";
const Login = () => {
const dispatch = useDispatch();

const isLogin = useSelector((state) => state.auth.isLogin);
const token = useSelector((state) => state.auth.token);

const handleLogin = () => {
    dispatch(loginToken(Date.now()));
}
    return  (
        <div>
            {isLogin ? <h3>{token}</h3> : <h2></h2>}
            <h4>Login</h4>
            <button onClick={handleLogin}>Please click to login</button>
        </div>
    ) 
}
export default Login;