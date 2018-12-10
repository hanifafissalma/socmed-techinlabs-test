import {user} from '../api/user.js';

export function fetchAllUser(){
    return{
      type: "GET_ALL_USER",
      payload: user.fetchAllUser()
    }
}
  