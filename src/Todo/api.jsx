import { addTodosFailure, addTodosRequest, addTodosSuccess, getTodofailure, getTodorequest, getTodosuccess } from "../Redux/app/action";


export const getTodos = () => (dispatch) => {
    // pre fetch
    const requestAction = getTodorequest();
    dispatch(requestAction);
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => {
        //success
        const successAction = getTodosuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        // failure
        const failureAction = getTodofailure();
        dispatch(failureAction);
      });
  };
  
  export const addTodos = (text) => (dispatch) => {
    const requestAction = addTodosRequest();
    dispatch(requestAction);
    return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
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