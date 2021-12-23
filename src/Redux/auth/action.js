import { authConstants } from "./actionType"

export const loginToken = (token) => {
   
    return{
        type:authConstants.LOGIN_TOKEN,
        payload : {
            token:token
        }
    }
}

export const signOut = (payload) => {
    return{
      type:authConstants.SIGN_OUT,
      payload
    }
}