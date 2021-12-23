// import { loadData, saveData } from "../util/localStorage"
// import { ADD_COUNTER, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, LOGIN_TOKEN, REDUCE_COUNTER, SIGN_OUT, TODO_ADD, TODO_DELETE, TODO_TOGGLE } from "./actiontype"

// const token = loadData("token") || null;

// const initState = {
//     counter : 1,
//    todos:[],
//    isLaoding:true,
//    isError:false,
//    isLogin: token !== null,
//    token:token
// }
// const reduce = (state = initState , {type,payload}) => {
       
//            switch(type){
//                case LOGIN_TOKEN : {
//                saveData("token",payload.token)
//                    return{
//                        ...state,
//                        isLogin:true,
//                        token : payload.token
//                    }
//                }
//                case SIGN_OUT : {
//                 window.localStorage.removeItem('token')
//                    return{
//                        ...state,
//                        isLogin:false
//                    }
//                }
//                case ADD_COUNTER:
//                    return{
//                        ...state,
//                        counter: state.counter+payload
//                    }
//                    case REDUCE_COUNTER:
//                        return{
//                            ...state,
//                            counter : state.counter - payload
//                        }
//                case TODO_ADD:
//                    return{
//                        ...state,
//                        todos:[...state.todos,payload]
//                    }
//                    case GET_TODOS_REQUEST:{
//                     return{
//                         ...state,
//                         isLoading  :true
//                     }
//                 }
//                 case GET_TODOS_SUCCESS:{
//                     return{
//                         ...state,
//                         todos: payload,
//                         isLoading:false
                        
//                     }
                    
//                 }
//                 case GET_TODOS_FAILURE:{
//                     return{
//                         ...state,
//                         isLoading:false,
//                         isError:true
//                     }
//                 }
//                    case TODO_DELETE:
//                        console.log(payload,"sddf");
//                        return{
//                            ...state,
//                            todos:payload
                        
//                        }
//                        case TODO_TOGGLE:
//                            return{
//                                ...state,
//                                todos:payload
//                            }
//                default:
//                    return state
//            }
       
// }

// export {reduce}