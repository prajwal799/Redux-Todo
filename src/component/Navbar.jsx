import { Link } from "react-router-dom"
import Login from "./Login";
import "./module.css"

const Navbar = () => {
    return(
        <div>
            <Link to="/"  className="link">Login</Link>
            <Link to="/todo" className="link">Todo</Link>
            {/* <Link to="/counter">Counter</Link> */}
        </div>
    )
}
export default Navbar;