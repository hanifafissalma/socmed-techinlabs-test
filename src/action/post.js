import {post} from '../api/post.js';

export function fetchAllPost(){
    return{
      type: "GET_ALL_POST",
      payload: post.fetchAllPost()
    }
}

export function fetchPostById(id){
  return{
    type: "GET_POST_BY_ID",
    payload: post.fetchPostById(id)
  }
}
  