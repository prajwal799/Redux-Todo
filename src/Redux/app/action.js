import { appConstants } from "./actionType"


const addcounter = (payload) => {
    return{
        type:appConstants.ADD_COUNTER,
        payload
    }
}
const reducecounter = (payload) => {
    return{
        type:appConstants.REDUCE_COUNTER,
        payload
    }
}
const todoadd = (payload) => {
    return{
        type:appConstants.TODO_ADD,
        payload
    }
}
const getTodorequest = (payload) => {
    return{
        type:appConstants.GET_TODOS_REQUEST,
        payload : {
            isLoading : true
        }
    }
}
const getTodosuccess = (todos) => {
  console.log("un")
    return{
        type:appConstants.GET_TODOS_SUCCESS,
        payload : {
            todos:todos
        }
    }
}
const getTodofailure = (payload) => {
    return {
        type:appConstants.GET_TODOS_FAILURE,
        payload : {
            isError : true
        }
    }
}
const toggleTodo = (id) => {
 
    return{
        type:appConstants.TODO_TOGGLE,
        payload:{
         id:id
        }
    }
}
const removeTodo = (id) => {
    return{
        type:appConstants.TODO_DELETE,
        payload : {
          id : id
        }
    }
}
export const addTodosRequest = () => {
    return {
      type: appConstants.ADD_TODOS_REQUEST,
      payload: {
        isLoading: true
      }
    };
  };
  
  export const addTodosSuccess = (todos) => {
    return {
      type: appConstants.ADD_TODOS_SUCCESS,
      payload: {
        todos: todos
      }
    };
  };
  
  export const addTodosFailure = () => {
    return {
      type: appConstants.ADD_TODOS_FAILURE,
      payload: {
        isError: true
      }
    };
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


export {todoadd,toggleTodo,removeTodo,addcounter,reducecounter,getTodofailure,getTodorequest,getTodosuccess};