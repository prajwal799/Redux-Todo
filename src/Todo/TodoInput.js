import { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";
import { todoadd } from "../Redux/action";

const TodoInput = () => {
    const [title,setTitle] = useState("");
    const dispatch = useDispatch();
   
    const handleAdd = () => {
        const payload = {
          id:uuid(),
          title,
          status:false
        }
        dispatch(todoadd(payload));
    }

    return (
        <div> 
            <input placeholder="add Something" value={title} onChange={(e) => setTitle(e.target.value)} />
             <button onClick={handleAdd}>Add</button>
        </div>
    )
}
export default TodoInput