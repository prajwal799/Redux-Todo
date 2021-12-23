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
                        todos: payload,
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
                       console.log(payload,"sddf");
                       return{
                           ...state,
                           todos:payload
                        
                }
                case appConstants.TODO_TOGGLE:
                           return{
                               ...state,
                               todos:payload
                }
               default:
                return state
           }
       
}

export {appReducer}