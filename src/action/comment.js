import {comment} from '../api/comment.js';

export function fetchAllComment(id){
    return{
      type: "GET_ALL_POST",
      payload: comment.fetchAllComment(id)
    }
}
  