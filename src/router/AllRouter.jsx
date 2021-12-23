import React from "react";

import { Link, Route , Routes  } from "react-router-dom";
import Counter from "../component/counter";
import Login from "../component/Login";
import Showmore from "../component/Showmore";
import Todo from "../Todo/Todo";

function AllRoute(){
    return(
        <div>
           

            <Routes>

             <Route path="/" element={<Login />}></Route>
            <Route path="/todo" exact element={<Todo />}>
            
            </Route>
            {/* <Route path="/counter" exact element={<Counter/>}/>
            <Route path="/item/:id" exact element={<Showmore />}/> */}
            </Routes>
            
        </div>
    )
}
export default AllRoute;