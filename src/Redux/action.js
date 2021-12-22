import { TODO_ADD, TODO_TOGGLE ,TODO_DELETE, GET_TODOS_REQUEST , GET_TODOS_SUCCESS , GET_TODOS_FAILURE, ADD_COUNTER, REDUCE_COUNTER } from "./actiontype"

const addcounter = (payload) => {
    return{
        type:ADD_COUNTER,
        payload
    }
}
const reducecounter = (payload) => {
    return{
        type:REDUCE_COUNTER,
        payload
    }
}

const todoadd = (payload) => {
    return{
        type:TODO_ADD,
        payload
    }
}
const getTodorequest = (payload) => {
    return{
        type:GET_TODOS_REQUEST,
        payload : {
            isLoading : true
        }
    }
}
const getTodosuccess = (todos) => {
    return{
        type:GET_TODOS_SUCCESS,
        payload : {
            todos:todos
        }
    }
}
const getTodofailure = (payload) => {
    return {
        type:GET_TODOS_FAILURE,
        payload : {
            isError : false
        }
    }
}
const todotoggle = (payload) => {
    return{
        type:TODO_TOGGLE,
        payload
    }
}
const tododelete = (payload) => {
    return{
        type:TODO_DELETE,
        payload
    }
}
export {todoadd,todotoggle,tododelete,addcounter,reducecounter,getTodofailure,getTodorequest,getTodosuccess};