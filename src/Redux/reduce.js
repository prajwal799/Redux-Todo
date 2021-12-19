import { TODO_ADD, TODO_DELETE, TODO_TOGGLE } from "./actiontype"

const initState = {
    todos:[
        {
            id:1,
            title:"Learn Redux",
            status:false
        }
    ]
}
const reduce = (state = initState , {type,payload}) => {
       
           switch(type){
               case TODO_ADD:
                   return{
                       ...state,
                       todos:[...state.todos,payload]
                   }
                   case TODO_DELETE:
                       console.log(payload,"sddf");
                       return{
                           ...state,
                           todos:state.todos.filter((item) => item.id !== payload)
                        
                       }
                       case TODO_TOGGLE:
                           return{
                               ...state,
                               todos:state.todos.map(item => item.id == payload ? {...item, status:!item.status} : {...item})
                           }
               default:
                   return state
           }
       
}

export {reduce}