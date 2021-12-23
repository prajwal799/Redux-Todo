import { useDispatch, useSelector } from "react-redux"
import { getTodofailure, getTodorequest, getTodosuccess, tododelete, todotoggle } from "../Redux/app/action";
import React, { useState } from "react";
import "./module.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";


function deleteTodo(id){
    return fetch(`https://pratice-heroku-server.herokuapp.com/posts/${id}` , {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json()) 
}

function toggleChange(id,payloads){
    
    return fetch(`https://pratice-heroku-server.herokuapp.com/posts/${id}` , {
        method:"PATCH",
        body : JSON.stringify({status:payloads}),    
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res=>res.json())
}

const TodoItem = () => {
    const [total , seTotal] = useState(0);
    const { todos ,isLoading , isError} = useSelector((state) => state.app.todos);
    const isLogin = useSelector((state) => state.auth.isLogin);
    const getTodo = () => {
        const requestAction = getTodorequest();
        dispatch(requestAction);
        return fetch('https://pratice-heroku-server.herokuapp.com/posts')
        .then((res) => res.json())
        .then((res) => {
          const successAction = getTodosuccess(res);
          dispatch(successAction);
      
        })
        .catch((err) => {
         const failureAction = getTodofailure();
         dispatch(failureAction);
        })
      }

    // console.log(todos,"todod");
    const dispatch = useDispatch();

    useEffect(() => {
     getTodo()
    },[])

    const handleDelete = (id) => {
         
        deleteTodo(id);
        getTodo()
    }
    const handleToggle = (id,status) => {
        var payloads;
       if(status == true){
            payloads = false
       }
       else{
            payloads = true;
       }
        toggleChange(id,payloads);
        getTodo()
    }
    
    // console.log(todos,"todos")
    return  ( <div>
        {isLoading && <h3>Loading...</h3>}
        {isError && <h3>Error...</h3>}
       
         {todos.map((item) => (
             <div key={item.id} className="todoList" >
                {item.title} - {item.status ? "Complete" : "Not Complete"}
                  <button onClick={() => handleToggle(item.id,item.status)}>Toggle</button>
                  <button onClick={ () => handleDelete(item.id)}>Delete</button>
                  
             </div>
         ))}


     </div>) 
    
    
    
}
export default TodoItem;