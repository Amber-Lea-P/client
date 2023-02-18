// registration
// login
// loading current user
import axios from "axios";
import { REGISTER_SUCCESS } from "../types";
export const register =
  ({ name, email, password }) =>
  async (dispatch) => {
    // used to register the user via performing the rest call.

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = JSON.stringify({ name, email, password });
    try {
      console.log(data);
      const res = await axios.post("/api/users", data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {}
  };
// export : we can use this function in any file
// const : keyword
// register : name of the function
//({name,email,password}) : json object which is accepted by a function/ method
// as an arguement caller===> component.
// async : asynchronous operations
// dispatch :