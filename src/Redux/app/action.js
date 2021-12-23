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
            isError : false
        }
    }
}
const todotoggle = (payload) => {
    return{
        type:appConstants.TODO_TOGGLE,
        payload
    }
}
const tododelete = (payload) => {
    return{
        type:appConstants.TODO_DELETE,
        payload
    }
}

export {todoadd,todotoggle,tododelete,addcounter,reducecounter,getTodofailure,getTodorequest,getTodosuccess};