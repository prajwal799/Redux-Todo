import { useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";
import {addTodos, todoadd} from "../Redux/app/action"
import { getTodos } from "./api";

const TodoInput = () => {
    const [title,setTitle] = useState("");
    const dispatch = useDispatch();

    
    
   function AddTodo(payloads){
       return fetch("https://pratice-heroku-server.herokuapp.com/posts" , {
           method:"POST",
           body : JSON.stringify(payloads),
               headers: {
                   "Content-Type": "application/json"
               }
           })
           .then(res=>res.json())   
   }
   const handleAdd = (text) => {
    dispatch(addTodos(text)).then((res) => {
      dispatch(getTodos());
    });
    };
    // const handleAdd = () => {
    //     try{
    //       const payloads = {
    //           title,
    //           status:false
    //       }
    //       const data = AddTodo(payloads);
    //       dispatch(todoadd(data));
    //     }
    //     catch(err){
    //      console.log(err)
    //     }
        // const payload = {
        //   id:uuid(),
        //   title,
        //   status:false
        // }
    // }

    return (
        <div> 
            <input placeholder="add Something" value={title} onChange={(e) => setTitle(e.target.value)} />
             <button onClick={handleAdd}>Add</button>
        </div>
    )
}
export default TodoInput