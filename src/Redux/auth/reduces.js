import { loadData, saveData } from "../../util/localStorage"
import { authConstants } from "./actionType";

const token = loadData("token") || null;

const initState = {
   isLogin: token !== null,
   token:token
}
const authReducer = (state = initState , {type,payload}) => {
       
           switch(type){
               case authConstants.LOGIN_TOKEN : {
               saveData("token",payload.token)
                   return{
                       ...state,
                       isLogin:true,
                       token : payload.token
                   }
               }
               case authConstants.SIGN_OUT : {
                window.localStorage.removeItem('token')
                   return{
                       ...state,
                       isLogin:false
                   }
               }
            
               default:
                   return state
           }
       
}

export {authReducer}