import { addTodosFailure, addTodosRequest, addTodosSuccess, getTodofailure, getTodorequest, getTodosuccess } from "../Redux/app/action";


export const getTodos = () => (dispatch) => {
    // pre fetch
    console.log("1")
    const requestAction = getTodorequest();
    dispatch(requestAction);
    return fetch("https://pratice-heroku-server.herokuapp.com/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res,"res");
        //success
        const successAction = getTodosuccess(res);
        dispatch(successAction);
      })
      .catch((err) => {
        // failure
        console.log(err,"err")
        const failureAction = getTodofailure();
        dispatch(failureAction);
      });
  };
  
  export const addTodos = (text) => (dispatch) => {
     console.log(text,"addtodos")
    const requestAction = addTodosRequest();
    dispatch(requestAction);
    return fetch("https://pratice-heroku-server.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: text,
        status: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        //success
        const successAction = addTodosSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        // failure
        const failureAction = addTodosFailure();
        dispatch(failureAction);
      });
  };