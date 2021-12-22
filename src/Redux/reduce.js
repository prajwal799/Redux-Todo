import { ADD_COUNTER, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, REDUCE_COUNTER, TODO_ADD, TODO_DELETE, TODO_TOGGLE } from "./actiontype"

const initState = {
    counter : 1,
   todos:[],
   isLaoding:true,
   isError:false
}
const reduce = (state = initState , {type,payload}) => {
       
           switch(type){
               case ADD_COUNTER:
                   return{
                       ...state,
                       counter: state.counter+payload
                   }
                   case REDUCE_COUNTER:
                       return{
                           ...state,
                           counter : state.counter - payload
                       }
               case TODO_ADD:
                   return{
                       ...state,
                       todos:[...state.todos,payload]
                   }
                   case GET_TODOS_REQUEST:{
                    return{
                        ...state,
                        isLoading  :true
                    }
                }
                case GET_TODOS_SUCCESS:{
                    return{
                        ...state,
                        todos: payload,
                        isLoading:false
                        
                    }
                    
                }
                case GET_TODOS_FAILURE:{
                    return{
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                }
                   case TODO_DELETE:
                       console.log(payload,"sddf");
                       return{
                           ...state,
                           todos:payload
                        
                       }
                       case TODO_TOGGLE:
                           return{
                               ...state,
                               todos:payload
                           }
               default:
                   return state
           }
       
}

export {reduce}