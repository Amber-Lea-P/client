import {USER_LOADED,REGISTER_SUCCESS  } from "../types";

// it is used to hold and manipulate the user related states in store. 
// all auth related operations / user related operations like register, lofin,  loading current user info. etc. 
const initialState = {
    token : null,
    isAuthenticated : null,
    loading : true,
    user : null
}
// it will be  part of ur global state / store where we can hold all user related data. 
export default (state = initialState, action) => {
    // action will share the data that needs to be manipulated and it will share the flag. 
    const {type, payload} = action
  switch (type) {

  case USER_LOADED:
    return { ...state }
    case REGISTER_SUCCESS:
        // to handle the success part of user registration//it will give us the token.
        return { ...state }

  default:
    return state
  }
}
