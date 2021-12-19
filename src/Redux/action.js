import { TODO_ADD, TODO_TOGGLE ,TODO_DELETE } from "./actiontype"

const todoadd = (payload) => {
    return{
        type:TODO_ADD,
        payload
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
export {todoadd,todotoggle,tododelete};