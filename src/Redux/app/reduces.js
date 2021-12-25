import {  saveData } from "../../util/localStorage"
import { appConstants} from "./actionType.jsx"


const initState = {
    counter : 1,
   todos:[],
   isLaoding:true,
   isError:false,
 
}
const appReducer = (state = initState , {type,payload}) => {
       
           switch(type){
                case appConstants.LOGIN_TOKEN : {
                saveData("token",payload.token)
                    return{
                        ...state,
                        isLogin:true,
                        token : payload.token
                    }
                }
                case appConstants.ADD_COUNTER:
                   return{
                       ...state,
                       counter: state.counter+payload
                }
                case appConstants.REDUCE_COUNTER:
                       return{
                           ...state,
                           counter : state.counter - payload
                }
                case appConstants.TODO_ADD:
                   return{
                       ...state,
                       todos:[...state.todos,payload]
                }
                case appConstants.GET_TODOS_REQUEST:{
                    return{
                        ...state,
                        isLoading  :true
                    }
                }
                case appConstants.GET_TODOS_SUCCESS:{
                    return{
                        ...state,
                        todos: payload.todos,
                        isLoading:false
                        
                    }      
                }
                case appConstants.GET_TODOS_FAILURE:{
                    return{
                        ...state,
                        isLoading:false,
                        isError:true
                    }
                }
                case appConstants.TODO_DELETE:
                       
                       return{
                           ...state,
                           todos:state.todos.filter((item) => item.id != payload.id )
                        
                }
                case appConstants.TODO_TOGGLE:
                           return{
                               ...state,
                               todos: state.todos.map((item) =>
                               item.id === payload.id
                                 ? { ...item, status: !item.status }
                                 : item
                             )
                }
                case appConstants.ADD_TODO_REQUEST: {
                    return {
                      ...state,
                      isLoading: true,
                      isError: false
                    };
                  }
                  case appConstants.ADD_TODO_SUCCESS: {
                    return {
                      ...state,
                      isLoading: false
                    };
                  }
                  case appConstants.ADD_TODO_FAILURE: {
                    return {
                      ...state,
                      isLoading: false,
                      isError: true
                    };
                  }
              
                  case appConstants.ADD_TODO: {
                    return { ...state, todos: [...state.todos, payload] };
                  }
               default:
                return state
           }
       
}

export {appReducer}